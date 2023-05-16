import { TeamListItem } from './TeamListItem'
import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { OurTeamPagePayload } from 'types'

export function OurTeamPage({ data }: { data: OurTeamPagePayload }) {
  // Default to an empty object to allow previews on non-existent documents
  const { teamMembers } = data

  return (
    <div className="bg-white ">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-accent-900 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-accent-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {teamMembers &&
            teamMembers.length > 0 &&
            teamMembers.map((teamMember, key) => {
              const href = resolveHref(teamMember._type, teamMember.slug)
              if (!href) {
                return null
              }
              return (
                <TeamListItem key={key} href={href} teamMember={teamMember} />
              )
            })}
        </ul>
      </div>
    </div>
  )
}
