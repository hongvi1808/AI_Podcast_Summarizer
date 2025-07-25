'use client';
import { Box, Button, Container, Link, Paper, Stack, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { audioSumarizerApi } from "./services/gen-summary-service";
import { FileSupaInfo } from "@/base/models/file.model";
import { ButtonBase } from "@/components/buttons/button-base.comp";
import BtnUploadAudio from "./component/btn-upload.comp";
import SummaryBox from "@/components/paragraph-box.comp";
import ParagraphPaper from "@/components/paragraph-box.comp";
import { useState } from "react";

export default function PodcastSummarizerPage() {
    //fetch data result summarizer
    const queryClient = useQueryClient();
        const [paragraph, setParagraph] = useState<string>('');
    

    const { mutate: mutateGen, isPending, isSuccess } = useMutation({
        mutationFn: audioSumarizerApi.gen,
        onError: (error) => {
            console.error('Error generating summary:', error);
        },
        onSuccess: (data) => {
            queryClient.clear()
            setParagraph(data.content);
            console.log('Summary generated successfully:', data);
        },
    });

    const handleGenerator = (e: any) => {
        mutateGen(queryClient.getQueryData(['uploadedFile']) as FileSupaInfo);
    };
    return (
        <Box sx={{ textAlign: 'center', }}>
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={1}
                sx={{ minHeight: '40vh', backgroundColor: '#666666', paddingX: 2, paddingY: 6, color: 'white' }}
            >
                <Typography variant="h4" color="white" >
                    {'Online AI Podcast Transcript Generator'}
                </Typography>

                <BtnUploadAudio />

                <Link onClick={handleGenerator} component={ButtonBase} color="#18FFFF">
                    {'Generate transcript'}
                </Link>

                <Container maxWidth="lg" sx={{ marginTop: 4 }}>
                    <ParagraphPaper title="Transcript" content={paragraph} />
                </Container>

            </Stack>
            <Box sx={{ padding: 4, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                    {'This is a simple online AI summarizer for podcasts. You can upload your podcast files and generate summaries easily.'}
                </Typography>
            </Box>
        </Box>
    );
}
