import PageWrapper from '@/components/layout/PageWrapper'
import Hero from '@/components/home/Hero'
import AboutStrip from '@/components/home/AboutStrip'
import ThreeSides from '@/components/home/ThreeSides'
import SelectedWork from '@/components/home/SelectedWork'
import VideoReels from '@/components/home/VideoReels'

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <AboutStrip />
      <ThreeSides />
      <SelectedWork />
      <VideoReels />
    </PageWrapper>
  )
}
