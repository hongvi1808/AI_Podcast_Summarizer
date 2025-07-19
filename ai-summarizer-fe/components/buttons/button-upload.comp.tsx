'use client';
import { ButtonProps, } from '@mui/material';
import * as React from 'react';
import { ButtonBase } from './button-base.comp';

export interface IButtonUploadProps extends ButtonProps {
    onFileChange: (file: File) => void;
    accept?: string; // Accept attribute for file input
    id: string; // ID for the file input
    title?: string
}

export function ButtonUpload(props: IButtonUploadProps) {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
        const file = event?.target.files?.[0];
        if (file && props.onFileChange) props.onFileChange(file);
    };
    return (
        <>
            <input
                accept={props.accept || 'audio/*,video/*'}
                id={props.id || 'upload-file'}
                type="file"
                hidden
                onChange={(e) => handleFileChange(e)}
            />
            <label htmlFor={props.id || 'upload-file'}>
                <ButtonBase variant="contained" component="span" color="primary" {...props}>
                    {props.title || 'Upload File'}
                </ButtonBase>
            </label>
        </>
    );
}


