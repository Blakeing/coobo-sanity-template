import { OurTeamPage } from '@/components/pages/our-team/OurTeamPage'
import { OurTeamPagePreview } from '@/components/pages/our-team/OurTeamPagePreview'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { PreviewWrapper } from 'components/preview/PreviewWrapper'
import { getOurTeamPage } from 'lib/sanity.client'
import { getPreviewToken } from 'lib/sanity.server.preview'
import { notFound } from 'next/navigation'

export default async function IndexRoute() {
  const token = getPreviewToken()
  const data = (await getOurTeamPage({ token })) || {
    teamMembers: [],
  }



  if (!data && !token) {
    notFound()
  }

  return (
    <>
      {token ? (
        <>
          <PreviewSuspense
            fallback={
              <PreviewWrapper>
                <OurTeamPage data={data} />
              </PreviewWrapper>
            }
          >
            <OurTeamPagePreview token={token} />
          </PreviewSuspense>
        </>
      ) : (
        <OurTeamPage data={data} />
      )}
    </>
  )
}
