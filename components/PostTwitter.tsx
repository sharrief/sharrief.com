import siteMetadata from '@/data/siteMetadata'
import Link from '@/components/Link'
import { messages } from '@/labels/site.en'

interface Props {
  slug: string
}

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteMetadata.siteUrl}/blog/${slug}`
  )}`

export default function PostDiscussTwitter({ slug }: Props) {
  return (
    <Link href={discussUrl(slug)} rel="nofollow">
      {messages.DiscussTwitter}
    </Link>
  )
}
