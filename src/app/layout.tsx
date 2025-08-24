import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrian Tworek | Software Engineer",
  description:
    "Portfolio website of Adrian Tworek, a software engineer specializing in full-stack development, TypeScript, Go, and Python. Explore projects, experience, and contact information.",
  keywords: [
    "Adrian Tworek",
    "Software Engineer",
    "Web Developer",
    "Full-Stack Developer",
    "Programmer",
    "Programming",
    "TypeScript",
    "Go",
    "Python",
    "React",
    "Angular",
    "Next.js",
    "Portfolio",
    "Projects",
  ],
  authors: [
    {
      name: "Adrian Tworek",
      // url: "https://yourdomain.com"
    },
  ],
  creator: "Adrian Tworek",
  publisher: "Adrian Tworek",
  // metadataBase: new URL("https://yourdomain.com"),
  openGraph: {},
  twitter: {},
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${space_grotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
