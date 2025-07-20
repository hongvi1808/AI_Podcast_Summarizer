import { nanoid } from "nanoid";
import { supabase } from "./client";
import { FileSupaInfo } from "../models/file.model";

const bucket = process.env.SUPA_BUCKET_NAME || 'summarizer-dev';;

export const uploadFile = async (file: File, dir?: string): Promise<FileSupaInfo> => {
    const path = `${dir || 'upload'}/${nanoid(36)}${file.size}.${file.name.split('.').pop()}`;
    const { data, error } = await supabase.storage
        .from(bucket)
        .upload(path, file);

    if (error) throw error;
    return {
        id: data.id,
        path: data.fullPath, name: file.name,
        url: getPublicUrl(bucket, data.path) || '',
        hash: await hashFile(file)
    } as FileSupaInfo;
};

const getPublicUrl = (bucket: string, path: string): string => {

    const { data } = supabase.storage
        .from(bucket)
        .getPublicUrl(path)

    return data.publicUrl
}

async function hashFile(file: File): Promise<string> {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}
