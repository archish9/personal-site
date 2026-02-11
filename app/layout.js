import './globals.css'

export const metadata = {
  title: 'Archish Patel | Engineering Clarity Over Complexity',
  description: 'Senior Lead Engineer building systems that scale quietly. Forging Intelligent Systems That Dominate the Digital Battlefield.',
  keywords: 'Senior Lead Engineer, AI Specialist, System Architecture, Engineering Leadership, Scalable Systems',
  openGraph: {
    title: 'Archish Patel | Engineering Clarity Over Complexity',
    description: 'Senior Lead Engineer building systems that scale quietly. Forging Intelligent Systems That Dominate the Digital Battlefield.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
