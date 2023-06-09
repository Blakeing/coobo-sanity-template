import { EnvelopeIcon } from '@heroicons/react/20/solid'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import { PhoneIcon } from 'lucide-react'
import Link from 'next/link'
import type { TeamMember } from 'types'

export function TeamMemberPage({ data }: { data: TeamMember }) {
  // Default to an empty object to allow previews on non-existent documents
  const { imageUrl, role, twitterUrl, linkedinUrl, memberName } = data || {}

  return (
    <div>
      <div>
        <img
          className="h-32 w-full object-cover lg:h-48"
          src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <ImageBox
              image={imageUrl}
              alt={`Cover image for ${memberName}`}
              wrapperClasses="relative h-24 w-24 sm:h-32 sm:w-32 "
              imageClasses=" object-cover rounded-full ring-4 ring-white "
            />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">
                {memberName}
              </h1>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <EnvelopeIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Message</span>
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <PhoneIcon
                  className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span>Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">
            {memberName}
          </h1>
        </div>
        <div className="mt-6">
          {/* Role */}
          {role && (
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Role</div>
              <div className="text-md md:text-lg">{role}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
