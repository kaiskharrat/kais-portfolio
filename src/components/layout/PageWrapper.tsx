import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeProvider } from './ThemeProvider'

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
