'use client'

import { TeamMemberPage } from './teamMemberPage'
import { usePreview } from 'lib/sanity.preview'
import { teamMemberBySlugQuery } from 'lib/sanity.queries'
import type { TeamMember } from 'types'

export function TeamMemberPreview({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const teamMember: TeamMember = usePreview(token, teamMemberBySlugQuery, {
    slug: slug,
  })

  return <TeamMemberPage data={teamMember} />
}
