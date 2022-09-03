import * as React from 'react'
import type { SeoProps } from '../../utils/types'

function Seo(props: SeoProps) {
  const {
    title,
    description = '',
    ogTitle = '',
    ogDescription = '',
    ogImage = '',
    component: HeadComponent,
  } = props
  return (
    <React.Fragment>
      <HeadComponent>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
      </HeadComponent>
    </React.Fragment>
  )
}

export { Seo }
