'use client';
import { createTheme } from '@mui/material/styles';

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
    fontFamily: 'Roboto, sans-serif',
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