import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adrian Tworek | Software Engineer',
  description:
    'Portfolio website of Adrian Tworek, a software engineer specializing in full-stack development, TypeScript, Go, and Python. Explore projects, experience, and contact information.',
  keywords: [
    'Adrian Tworek',
    'Software Engineer',
    'Web Developer',
    'Full-Stack Developer',
    'Programmer',
    'Programming',
    'TypeScript',
    'Go',
    'Python',
    'React',
    'Angular',
    'Next.js',
    'Portfolio',
    'Projects',
  ],
  authors: [
    {
      name: 'Adrian Tworek',
      // url: "https://yourdomain.com"
    },
  ],
  creator: 'Adrian Tworek',
  publisher: 'Adrian Tworek',
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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
