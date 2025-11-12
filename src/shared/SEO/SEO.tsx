import { Helmet } from 'react-helmet-async'
import { SEO_CONFIG } from '@/shared/config/seo.config'

export interface SEOProps {
  title?: string
  titleEn?: string
  description?: string
  descriptionEn?: string
  path?: string
  keywords?: string[]
}

export const SEO = ({
  title,
  titleEn,
  description,
  descriptionEn,
  path = '',
  keywords = [],
}: SEOProps) => {
  const fullUrl = `${SEO_CONFIG.siteUrl}${path}`

  const defaultTitle = SEO_CONFIG.siteName
  const ruTitle = title || defaultTitle
  const enTitle = titleEn || title || defaultTitle
  const fullTitle = title ? `${ruTitle} / ${enTitle} | ${defaultTitle}` : defaultTitle

  const defaultDesc = SEO_CONFIG.defaultDescription
  const ruDesc = description || defaultDesc
  const enDesc = descriptionEn || description || defaultDesc

  const allKeywords = [...SEO_CONFIG.defaultKeywords, ...keywords].join(', ')

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={ruDesc} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={ruDesc} />

      {enTitle !== ruTitle && <meta property="og:title:en" content={enTitle} />}
      {enDesc !== ruDesc && <meta property="og:description:en" content={enDesc} />}

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={ruDesc} />
    </Helmet>
  )
}
