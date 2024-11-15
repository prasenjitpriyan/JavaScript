import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'JavaScript Notes & Snippets',
  description:
    'Explore comprehensive JavaScript notes, code snippets, and tips for developers.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <main>{children}</main>
      </body>
    </html>
  )
}