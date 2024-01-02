import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import Link from 'next/link'
import { formatDate } from '@/lib/formatDate'

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)
  return (
    <>
      <main className="flex min-h-screen flex-col p-24">
        <h1 className="mb-4 text-3xl">overra&apos;s page</h1>
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </main>
    </>
  )
}

async function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="relative mb-4 rounded-md border border-teal-300 p-4">
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
      <Link href={`/${article.slug}`}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{article.title}</span>
      </Link>
      <time dateTime={article.date} className="ml-4 text-sm">
        {formatDate(article.date)}
      </time>
      <div>{article.description}</div>
    </article>
  )
}
