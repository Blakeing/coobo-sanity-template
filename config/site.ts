import { NavItem } from '@/types/nav'

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BASE_URL
    : 'http://localhost:3000'

interface SiteConfig {
  name: string
  url: string
  description: string
  mainNav: NavItem[]
  links: {
    facebook?: string
    linkedin?: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Coobo Template',
  url: baseUrl!,
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'About',
      slug: '/about',
    },
    {
      title: 'Our Team',
      slug: '/our-team',
    },

    {
      title: 'Contact',
      slug: '/contact',
    },
    {
      title: 'Studio',
      slug: '/studio',
    },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/company/coobo-media',
    facebook: 'https://www.facebook.com/coobomedia',
  },
}
