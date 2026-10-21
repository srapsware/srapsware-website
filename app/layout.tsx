import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { site } from '@/config/site';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
 metadataBase: new URL(site.url), title: 'Srapsware - Software Development Company', description: site.description,
 icons: { icon: '/assets/img/favicon.png', apple: '/assets/img/favicon.png' },
 openGraph: { title: 'Srapsware - Software designed around your business', description: site.description, siteName: site.name, locale: 'en_US', type: 'website', images: ['/opengraph-image'] },
 twitter: { card: 'summary_large_image', title: site.name, description: site.description, images: ['/opengraph-image'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col max-w-[100vw] overflow-x-hidden">
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Header />
            <main id="main-content" tabIndex={-1} className="flex-1 w-full max-w-[100vw]">
              {children}
            </main>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: site.legalName, url: site.url, email: site.email, sameAs: site.social.map(item => item.href) }).replace(/</g, '\\u003c') }} />
            <Footer />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
