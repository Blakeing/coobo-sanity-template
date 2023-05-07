'use client'

import { ProjectPage } from './ProjectPage'
import { usePreview } from 'lib/sanity.preview'
import { projectBySlugQuery } from 'lib/sanity.queries'
import type { ProjectPayload } from 'types'

export function ProjectPreview({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const project: ProjectPayload = usePreview(token, projectBySlugQuery, {
    slug: slug,
  })

  return <ProjectPage data={project} />
}
