import { ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { twc } from 'react-twc'

export function Article({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  return (
    <div className="xl:relative">
      <div className="mx-auto max-w-2xl">
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {article.title}
            </h1>
            <time
              dateTime={article.date}
              className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              <span className="ml-3">{formatDate(article.date)}</span>
            </time>
          </header>
          <Prose className="mt-8" data-mdx-content>
            {children}
          </Prose>
        </article>
      </div>
    </div>
  )
}

const Prose = twc.div`prose dark:prose-invert`
