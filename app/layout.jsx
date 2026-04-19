import './globals.css'

export const metadata = {
  title: 'Satheeskumar Marikani — Senior Full Stack Developer',
  description: 'Senior Full Stack Developer with 8+ years of experience in React.js, Next.js, Laravel, PHP, WordPress, and CraftCMS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
