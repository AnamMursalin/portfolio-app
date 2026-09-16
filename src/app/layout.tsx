import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anam Fatima | Computer Science Student | Software & AI",
  description:
    "Portfolio of Anam Fatima — 4th year BS Computer Science student at Namal University, Mianwali. Specializing in Software Engineering, AI/ML, and Web Development.",
  keywords: [
    "Anam Fatima",
    "Computer Science",
    "Software Engineer",
    "AI/ML",
    "Web Development",
    "Namal University",
    "Portfolio",
  ],
  authors: [{ name: "Anam Fatima" }],
  openGraph: {
    title: "Anam Fatima | Computer Science Student | Software & AI",
    description:
      "Portfolio of Anam Fatima — CS student at Namal University specializing in Software Engineering, AI/ML, and Web Development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Anam Fatima | Computer Science Student | Software & AI",
    description:
      "Portfolio of Anam Fatima — CS student at Namal University specializing in Software Engineering, AI/ML, and Web Development.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
