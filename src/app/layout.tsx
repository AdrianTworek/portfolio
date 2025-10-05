import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

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
    "Portfolio website of Adrian Tworek, a software engineer specializing in full-stack development, TypeScript, Python, and Go. Explore projects, experience, and contact information.",
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
      url: "https://www.adriantworek.com",
    },
  ],
  creator: "Adrian Tworek",
  publisher: "Adrian Tworek",
  metadataBase: new URL("https://www.adriantworek.com"),
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
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />
      <SpeedInsights />
      <body
        className={`${inter.variable} ${space_grotesk.variable} antialiased selection:bg-accent selection:text-white`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
