import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

export const metadata: Metadata = {
  title: "NEROZARB - Premium AI-Powered Social Media Marketing",
  description: "Apne brand ko data-driven marketing strategies se transform karein. Trusted by 50+ Pakistani businesses. 300% average growth guaranteed.",
  metadataBase: new URL('https://nerozarb.com'),
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    siteName: 'NEROZARB',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://slelguoygbfzlpylpxfs.supabase.co" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}