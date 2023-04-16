import PageTitle from '@/components/PageTitle'
import formatDate from '@/lib/utils/formatDate'

interface Props {
  date: string
  title: string
}

export default function PostHeader({ date, title }: Props) {
  return (
    <header className="pt-6 xl:pb-6">
      <div className="space-y-1 border-b border-gray-200 dark:border-gray-700 pb-10 text-center">
        <div>
          <PageTitle>{title}</PageTitle>
        </div>
        <dl>
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </div>
        </dl>
      </div>
    </header>
  )
}
