'use client';
import { Button, ButtonProps, styled } from '@mui/material';
import * as React from 'react';

export interface IButtonBaseProps extends ButtonProps{
}

export function ButtonBase(props: IButtonBaseProps) {
    return (
        <Button 
            sx={{
                textTransform: 'none',
                transition: 'color 0.3s ease, opacity 0.3s ease',
                '&:hover ': {
                    opacity: 0.8
                },
            }} {...props} />
    );
}


