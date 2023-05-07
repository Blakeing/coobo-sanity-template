'use client'

import { Page } from './Page'
import { usePreview } from 'lib/sanity.preview'
import { pagesBySlugQuery } from 'lib/sanity.queries'
import type { PagePayload } from 'types'

export function PagePreview({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const about: PagePayload = usePreview(token, pagesBySlugQuery, {
    slug: slug,
  })

  return <Page data={about} />
}
