import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Header'
import Footer from './Footer'
import Box from './common/Box'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={inter.className}>
        <div className="font-sans min-h-screen text-gray-900 bg-white flex flex-col">
          <Header />
          <div className='container mx-auto'>{children}</div>
          <Box />
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
