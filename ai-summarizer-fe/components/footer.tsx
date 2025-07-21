'use client';
import { Box, Container, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          <Link color="inherit" href="https://your-site.com/" target="_blank" rel="noopener">
            {'AI Summarizer'}
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}
