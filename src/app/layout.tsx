import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen Varma | Data Scientist & ML Engineer",
  description:
    "Portfolio of Naveen Varma — Data Scientist, Machine Learning Engineer, and AI Developer. Specializing in Python, Computer Vision, NLP, and building scalable data-centric solutions.",
  keywords: [
    "Naveen Varma",
    "Data Scientist",
    "Machine Learning",
    "AI Developer",
    "Python",
    "Portfolio",
    "Computer Vision",
    "NLP",
    "TensorFlow",
  ],
  authors: [{ name: "Naveen Varma" }],
  openGraph: {
    title: "Naveen Varma | Data Scientist & ML Engineer",
    description:
      "Data Scientist building AI-powered solutions. Specializing in Python, ML, Computer Vision, and full-stack development.",
    type: "website",
    locale: "en_US",
    siteName: "Naveen Varma Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen Varma | Data Scientist & ML Engineer",
    description:
      "Data Scientist building AI-powered solutions. Specializing in Python, ML, Computer Vision, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#050816] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
