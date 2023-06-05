import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from './Header'
import Footer from './Footer'

const montserrat = Montserrat({ 
    subsets: ['latin'], 
    weight:"400"
  })

export const metadata = {
  title: "Peter Nguyen",
  description: "I'm a Junior Front-End Web Developer and this is my Portfolio. I'm an analytical problem solver with well-developed soft skills and a mentor to my peers.",
  keywords: "Web Development, Front-End, Back-End",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
