import './Styles/globals.scss'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Styles from './Styles/page.module.scss'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marcelino Gamino',
  description: 'Personal Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${Styles.pageBackground}`}>{children}</body>
    </html>
  )
}

