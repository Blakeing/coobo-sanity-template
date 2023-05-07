import Header from '@/components/header'
import HomeSlider from '@/components/home-slider'

export default function HomePage() {
  return (
    <main>
      {/* <SiteHeader position="fixed" /> */}
      <Header position="fixed" />
      <HomeSlider />
    </main>
  )
}
