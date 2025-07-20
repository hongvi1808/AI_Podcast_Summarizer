import api from "@/base/axios/axios-method";
import { FileSupaInfo } from "@/base/models/file.model";

const urlDefault = 'summarizer';

export const audioSumarizerApi = {
    gen: (data: FileSupaInfo) => {
        return api.post(`${urlDefault}/generate`, data);
    }
}