import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import type { ImageProps } from 'next/image'
import Link from 'next/link'
import { twc } from 'react-twc'
import { Article } from './components/blog/article'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Article,
    a: twc(Link)`text-blue-500 hover:underline`,
    Image: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
  }
}
