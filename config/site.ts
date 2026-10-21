const canonicalUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.srapsware.com')
if (canonicalUrl.hostname === 'srapsware.com') canonicalUrl.hostname = 'www.srapsware.com'

export const site = {
  name: 'Srapsware',
  signature: '15 Years of code baking',
  phone: '+91 79823 77273',
  legalName: 'Srapsware Pvt. Ltd.',
  url: canonicalUrl.toString().replace(/\/+$/, ''),
  email: 'contact@srapsware.com',
  description: 'Software designed around your business. Web applications, mobile products and cloud systems, from discovery to ongoing support.',
  primaryCTA: { label: 'Get Free Quote', href: '/contact?type=quote' },
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/srapsware' },
    { label: 'X', href: 'https://twitter.com/srapsware' },
    { label: 'Facebook', href: 'https://facebook.com/srapsware' },
    { label: 'Instagram', href: 'https://instagram.com/srapsware' },
    { label: 'GitHub', href: 'https://github.com/srapsware' },
  ],
} as const

export const journey = [
  { year: '2010', title: 'An idea becomes a company.', description: 'Our journey began with a simple ambition: help businesses turn their ideas into useful software.', illustration: 'foundation' },
  { year: '2015', title: 'Building experience, project by project.', description: 'New projects brought new challenges, deeper technical experience and lasting client relationships.', illustration: 'delivery' },
  { year: '2020', title: 'More perspectives. One team.', description: 'Design, development and delivery came together to solve increasingly connected business challenges.', illustration: 'team' },
  { year: '2025', title: 'Connecting the whole picture.', description: 'Web, mobile and cloud capabilities support the complete product journey, from the first conversation to ongoing improvement.', illustration: 'platform' },
] as const

export const deliverySteps = [
  { number: '01', title: 'Discover', description: 'Understand the people, the problem and what success looks like.', output: 'A clear project brief' },
  { number: '02', title: 'Design', description: 'Explore the experience and validate the important decisions.', output: 'A testable prototype' },
  { number: '03', title: 'Build', description: 'Deliver in focused increments, with regular reviews together.', output: 'Working software' },
  { number: '04', title: 'Launch', description: 'Test the details, prepare the team and release with care.', output: 'A supported release' },
  { number: '05', title: 'Improve', description: 'Learn from real use and keep your product moving forward.', output: 'A practical roadmap' },
] as const
