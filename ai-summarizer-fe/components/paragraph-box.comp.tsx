'use client';

import { Paper, Typography, Box, IconButton, Tooltip, Snackbar } from '@mui/material';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline'; // Heroicons
import { useState } from 'react';

interface ParagraphPaperProps {
    content: string;
    title?: string;
}

const ParagraphPaper: React.FC<ParagraphPaperProps> = ({ content, title = 'Bản tóm tắt' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                borderRadius: 2,
                backgroundColor: '#fefefe',
                minHeight: 400,
                maxHeight: 800,
                overflowY: 'auto',
                whiteSpace: 'pre-line',
                position: 'relative',
                direction: 'ltr'
            }}
        >
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="h6">{title}</Typography>
                <Tooltip title="Copy to clipboard">
                    <IconButton onClick={handleCopy}>
                        {copied ? (
                            <CheckIcon style={{ width: 20, height: 20, color: 'green' }} />
                        ) : (
                            <ClipboardIcon style={{ width: 20, height: 20 }} />
                        )}
                    </IconButton>
                </Tooltip>
            </Box>

            <Typography textAlign={'left'} color="text.secondary" variant="body1">
                {content || 'No content to display!'}
            </Typography>

            <Snackbar
                open={copied}
                autoHideDuration={2000}
                onClose={() => setCopied(false)}
                message="Copied!"
            />
        </Paper>
    );
};

export default ParagraphPaper;
