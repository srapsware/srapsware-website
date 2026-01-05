import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://srapsware.com'),
  title: "Srapsware - Software Development Company",
  description: "15+ years of code baking. We create cutting-edge web and mobile applications with AI, cloud, and modern frameworks for ambitious businesses.",
  icons: {
    icon: [
      { url: '/assets/img/favicon.png', sizes: 'any' },
      { url: '/assets/img/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/img/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/assets/img/favicon.png',
    shortcut: '/assets/img/favicon.png',
  },
  openGraph: {
    title: 'Srapsware - Software Development Company',
    description: '15+ years of code baking. We create cutting-edge web and mobile applications with AI, cloud, and modern frameworks.',
    url: 'https://srapsware.com',
    siteName: 'Srapsware',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Srapsware - Software Development Company',
    description: '15+ years of code baking. We create cutting-edge web and mobile applications.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
