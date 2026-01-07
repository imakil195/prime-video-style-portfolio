import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://akilsaravanan.com'),
  title: {
    default: "Akil Saravanan",
    template: "%s | Akil Saravanan"
  },
  description: "Portfolio of Akil Saravanan, a Full Stack Developer specializing in React, Node.js, and Cloud Engineering. View my projects and experience.",
  openGraph: {
    title: "Akil Saravanan",
    description: "Full Stack Developer Portfolio - React, Node.js, Cloud Engineering.",
    url: 'https://akilsaravanan.com',
    siteName: 'Akil Saravanan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Akil Saravanan",
    description: "Full Stack Developer Portfolio - React, Node.js, Cloud Engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
