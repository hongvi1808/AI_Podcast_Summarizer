'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#111111', // màu chính
    },
    secondary: {
      main: '#666666', // màu phụ
    },
    background: {
      default: '#ffffff', // màu nền
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'secondary', // màu chữ mặc định
      },
    },
  }
});

export default theme;