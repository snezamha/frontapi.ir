import { ThemeProvider } from '@/providers/theme-provider';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
const rtlFont = localFont({ src: '../../assets/fonts/IRANSans.ttf' });
const ltrFont = Inter({ subsets: ['latin'] });
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import DirectionProvider from '@/providers/direction-provider';
import AuthProvider from '@/providers/auth.provider';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from '@/components/ui/sonner';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { locale } = params;
  const messages = await getMessages();
  const t = createTranslator({ locale, messages });

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
    title: t('RootLayout.title'),
    description: t('RootLayout.description'),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  const direction = getLangDir(locale);
  return (
    <html suppressHydrationWarning lang={locale} dir={direction}>
      <body
        suppressHydrationWarning={true}
        className={`${locale === 'fa' ? rtlFont.className : ltrFont.className}`}
      >
        <AuthProvider>
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
            <NextIntlClientProvider messages={messages} locale={locale}>
              <DirectionProvider direction={direction}>
                {children}
                <Toaster />
                <SonnerToaster />
              </DirectionProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
