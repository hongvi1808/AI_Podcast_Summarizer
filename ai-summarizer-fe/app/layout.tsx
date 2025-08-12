import "./globals.css";
import AppBarMain from "@/components/app-bar.comp";
import { Footer } from "@/components/footer";
import ReactQueryProvider from "@/base/react-query/provider";
import StyleRoot from "@/components/config/style-root";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <StyleRoot>
            <AppBarMain />
            {children}
            <Footer />
          </StyleRoot>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
