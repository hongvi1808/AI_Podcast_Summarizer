'use client'
import theme from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";


const StyleRoot = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <AppRouterCacheProvider>
    <ThemeProvider theme={theme}>
       <CssBaseline />
      {children}
    </ThemeProvider>
  </AppRouterCacheProvider>
)
export default StyleRoot;