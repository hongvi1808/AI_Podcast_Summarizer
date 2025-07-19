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
    return {...data, name: file.name, url:  getPublicUrl(bucket, data.path) || ''};
};

const getPublicUrl = (bucket: string, path: string): string=> {

    const { data } =  supabase.storage
        .from(bucket)
        .getPublicUrl(path)

    return data.publicUrl
}