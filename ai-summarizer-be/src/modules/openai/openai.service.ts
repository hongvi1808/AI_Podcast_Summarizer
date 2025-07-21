import { Injectable, Logger } from '@nestjs/common';
import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class OpenaiService {
    private readonly openai: OpenAI;
    constructor() {
        this.openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    async detectLanguage(text: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'Bạn là công cụ phát hiện ngôn ngữ chính xác.' },
                {
                    role: 'user',
                    content: `Xác định ngôn ngữ của đoạn văn sau (chỉ trả về tên ngôn ngữ, không giải thích):\n\n${text}`,
                },
            ],
        });

        return response.choices[0].message?.content?.trim() || 'unknown';
    }

    async summarizeText(text: string): Promise<string> {
        const language = await this.detectLanguage(text);
        const prompt = `Tóm tắt đoạn văn sau bằng ngôn ngữ gốc (${language}):\n\n${text}`;

        const chatCompletion = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'Bạn là một trợ lý chuyên tóm tắt văn bản theo đúng ngôn ngữ đầu vào.' },
                { role: 'user', content: prompt },
            ],
        });

        return chatCompletion.choices[0].message?.content?.trim() || '';
    }

    async transcribeAudioFromUrl(audioUrl: string): Promise<string> {
        Logger.log(`Downloading audio from: ${audioUrl}`);

        // Tạo tên file tạm thời
        const fileExt = path.extname(audioUrl) || '.mp3';
        const tempFilename = `temp-${uuidv7()}${fileExt}`;
        const tempPath = path.join(__dirname, '..', '..', 'uploads', tempFilename);

        // Tải file từ URL
        const response = await axios.get(audioUrl, {
            responseType: 'stream',
        });

        const writer = fs.createWriteStream(tempPath);
        response.data.pipe(writer);

        await new Promise<void>((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });

        const transcription = await this.openai.audio.transcriptions.create({
            file: fs.createReadStream(tempPath), // Đường dẫn đến file tạm
            model: "whisper-1",
            response_format: 'text',
        });

        fs.unlinkSync(tempPath); // xóa file tạm

        return transcription;
    }

    async generateTitle(text: string): Promise<string> {
        const language = await this.detectLanguage(text);

        const response = await this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'Bạn là một biên tập viên giỏi đặt tiêu đề ngắn gọn, súc tích, đúng nội dung và đúng ngôn ngữ văn bản.',
                },
                {
                    role: 'user',
                    content: `Hãy đặt một tiêu đề phù hợp, không dài quá 12 từ, cho đoạn văn sau  sau bằng ngôn ngữ gốc (${language}):\n\n${text}`,
                },
            ],
        });

        return response.choices[0].message?.content?.trim() || '';
    }

}
