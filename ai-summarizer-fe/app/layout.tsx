import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AppBarMain from "@/components/app-bar.comp";
import { Footer } from "@/components/footer";
import theme from "@/components/config/theme";
import ReactQueryProvider from "@/base/react-query/provider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBarMain />
            {children}
            <Footer />
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
