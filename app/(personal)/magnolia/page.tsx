import Flower from '../../../public/images/magnolia-flower.jpg'
import Image from 'next/image'

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
]

export default function MagnoliaPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative min-h-[40rem] overflow-hidden rounded-3xl  px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <img
                className="absolute inset-0 h-full w-full object-cover "
                src={Flower.src}
                alt=""
              />
            </div>
            <div className="mt-10 flex">
              <a
                href="#"
                className="text-base font-semibold leading-7 text-indigo-600"
              >
                Learn more about our company{' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Expand Your Team
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  For RIAs in need of bandwidth to establish or manage an
                  existing private investment platform, our team works alongside
                  wealth managers to assist in the following roles: deal
                  sourcing, evaluating, investment management, and reporting.
                  Our deal flow and investment capabilities are built to replace
                  any need for a full-time internal team, at a fraction of the
                  cost.
                </p>
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Duties Include:
                </h1>
                <ul className="mt-6 list-inside list-disc space-y-2">
                  <li>
                    Work in partnership with wealth managers to develop
                    objectives and strategies to offer private investments to
                    their clients.
                  </li>
                  <li>
                    Source, evaluate and propose investments as part of a fund
                    formed for the private wealth manager or individual clients.
                  </li>
                  <li>
                    Understand fund structure or vehicle that is most
                    appropriate.
                  </li>
                  <li>
                    Experience to structure investments and terms thereof.
                  </li>
                  <li>
                    Prepare diligence and investment memorandums for fund- and
                    investment-level marketing material.
                  </li>
                  <li>
                    Manage investments for the private wealth manager within the
                    fund or for stand-alone investments with individual clients.
                  </li>
                  <li>
                    Provide up-to-date information, quarterly reporting of
                    investment progress and valuation estimates.
                  </li>
                  <li>
                    Assist in managing capital calls, distributions and
                    financial statements with fund administrators.
                  </li>
                  <li>Manage annual audit and tax documentation.</li>
                  <li>
                    Provide global support for all private investment needs to
                    effectively add breadth to the private wealth manager’s
                    offerings.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
