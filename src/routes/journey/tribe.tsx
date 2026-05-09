import { createFileRoute } from '@tanstack/react-router'
import { MDXProvider } from '@mdx-js/react'

import TribeContent from '@/src/content/tribe.mdx'
import { mdxComponents } from '@/src/lib/mdx-components'

export const Route = createFileRoute('/journey/tribe')({
  component: TribePage,
})

function TribePage() {
  return (
    <MDXProvider components={mdxComponents}>
      <TribeContent />
    </MDXProvider>
  )
}
