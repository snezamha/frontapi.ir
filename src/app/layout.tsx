import { ThemeProvider } from '@/providers/theme-provider';
import '@/styles/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body suppressHydrationWarning={true}>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
