'use client'

import { OurTeamPage } from './OurTeamPage'
import { usePreview } from 'lib/sanity.preview'
import { homePageQuery, ourTeamPageQuery } from 'lib/sanity.queries'
import type { HomePagePayload, OurTeamPagePayload } from 'types'

export function OurTeamPagePreview({ token }: { token: null | string }) {
  const ourTeam: OurTeamPagePayload = usePreview(token, ourTeamPageQuery)

  if (!ourTeam) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <OurTeamPage data={ourTeam} />
}
