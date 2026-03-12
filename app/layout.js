import { Lora, Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ThemeProvider from '../components/ThemeProvider';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://iamnoob.in'),
  title: {
    default: 'Archish Patel — Senior Full-Stack Developer & AI Engineer',
    template: '%s | Archish Patel',
  },
  description:
    'Archish Patel is a senior full-stack engineer with 11+ years of experience building scalable systems, AI-powered applications, and RAG architectures.',
  keywords: [
    'Archish Patel',
    'Full-Stack Developer',
    'AI Engineer',
    'RAG',
    'GenAI',
    'Software Engineer',
    'Web Developer',
  ],
  authors: [{ name: 'Archish Patel', url: 'https://iamnoob.in' }],
  creator: 'Archish Patel',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://iamnoob.in',
    siteName: 'Archish Patel',
    title: 'Archish Patel — Senior Full-Stack Developer & AI Engineer',
    description:
      'Senior full-stack engineer with 11+ years of experience building scalable systems, AI-powered applications, and RAG architectures.',
    images: [
      {
        url: '/images/archish-patel.webp',
        width: 320,
        height: 320,
        alt: 'Archish Patel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Archish Patel — Senior Full-Stack Developer & AI Engineer',
    description:
      'Senior full-stack engineer with 11+ years of experience building scalable systems and AI-powered applications.',
    images: ['/images/archish-patel.webp'],
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f4ef' },
    { media: '(prefers-color-scheme: dark)', color: '#141210' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${lora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
