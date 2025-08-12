'use client';

import { FileSupaInfo } from "@/base/models/file.model";
import { uploadFile } from "@/base/supabase/storage.service";
import { ButtonUpload } from "@/components/buttons/button-upload.comp";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export default function BtnUploadAudio() {
    const queryClient = useQueryClient();

    // Upload audio file
    const uploadAudio = async (file: File) => {
        return uploadFile(file, 'audios')
    };
    const { mutate: mutateUpload, isPending } = useMutation({
        mutationFn: uploadAudio,
        onSuccess: (data) => {
            queryClient.setQueryData(['uploadedFile'], data);
        },
    });
    return <ButtonUpload id='upload-audio'
        accept='audio/*'
        loading={isPending}
        size="large"
        title={(queryClient.getQueryData(['uploadedFile']) as FileSupaInfo)?.name || 'UPLOAD NEW AUDIO FILE'}
        onFileChange={(file) => {mutateUpload(file)}} />;
}
