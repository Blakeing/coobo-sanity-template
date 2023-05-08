import Header from '@/components/header'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import { getPreviewToken } from 'lib/sanity.server.preview'

export default function OurTeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = getPreviewToken()

  return (
    <main>
      {token && <PreviewBanner />}
      <Header position="sticky" />
      {children}
    </main>
  )
}
