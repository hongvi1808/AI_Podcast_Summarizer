'use client';
import { Box, Button, Container, Link, Paper, Stack, Typography } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { audioSumarizerApi } from "./services/gen-summary-service";
import { FileSupaInfo } from "@/base/models/file.model";
import { ButtonBase } from "@/components/buttons/button-base.comp";
import BtnUploadAudio from "./component/btn-upload.comp";

export default function PodcastSummarizerPage() {
    //fetch data result summarizer
    const queryClient = useQueryClient();

    const { mutate: mutateGen, isPending, isSuccess } = useMutation({
        mutationFn: audioSumarizerApi.gen,
        onError: (error) => {
            console.error('Error generating summary:', error);
        },
        onSuccess: (data) => {
            queryClient.clear()
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
                    {'Online AI Podcast Summarizer Generator'}
                </Typography>

                <BtnUploadAudio />

                <Link onClick={handleGenerator} component={ButtonBase} color="#18FFFF">
                    {'Generate Summarizer'}
                </Link>

                {isSuccess && (<Container maxWidth="lg" sx={{ marginTop: 4 }}>

                    <Box sx={{ marginTop: 2, width: '100%', textAlign: 'center' }}>
                        <Paper elevation={3} sx={{ padding: 2, marginBottom: 2, minHeight: '60vh' }}>
                            <Typography variant="h6" gutterBottom>
                                {'Welcome to the AI Summarizer for Podcasts'}
                            </Typography>
                        </Paper>
                    </Box>
                </Container>)}

            </Stack>
            <Box sx={{ padding: 4, textAlign: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                    {'This is a simple online AI summarizer for podcasts. You can upload your podcast files and generate summaries easily.'}
                </Typography>
            </Box>
        </Box>
    );
}
