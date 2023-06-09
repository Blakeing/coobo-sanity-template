import Header from '@/components/header'
import type { PortableTextBlock } from '@portabletext/types'
import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { getSettings } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'

export const revalidate = 5 // revalidate this page every 60 seconds

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()
  // const settings = (await getSettings({ token })) || {
  //   menuItems: [],
  //   footer: [],
  // }

  return (
    // <>
    //   {token && <PreviewBanner />}
    //   <main>
    //     {/* <Header position="sticky" /> */}

    //     {children}
    //   </main>
    // </>
    <div className="flex min-h-screen flex-col bg-white text-black">
      {token && <PreviewBanner />}
      <Header position="sticky" />
      {/* <Navbar menuItems={settings.menuItems} /> */}
      <div className="my-20 grow px-4 md:px-16 lg:px-32">{children}</div>
      {/* <Footer footer={settings.footer as PortableTextBlock[]} /> */}
    </div>
  )
}
