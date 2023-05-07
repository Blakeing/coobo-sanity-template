import Header from '@/components/header'
import HomeSlider from '@/components/home-slider'
import { SiteHeader } from '@/components/site-header'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main>
      {/* <SiteHeader position="fixed" /> */}
      <Header position="fixed" />
      <HomeSlider />
    </main>
  )
}
