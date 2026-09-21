import PageWrapper from '@/components/layout/PageWrapper'
import Hero from '@/components/home/Hero'
import AboutStrip from '@/components/home/AboutStrip'
import ThreeSides from '@/components/home/ThreeSides'
import SelectedWork from '@/components/home/SelectedWork'

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <AboutStrip />
      <ThreeSides />
      <SelectedWork />
    </PageWrapper>
  )
}
