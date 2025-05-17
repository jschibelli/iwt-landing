import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  type?: string;
  canonical?: string;
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  children?: React.ReactNode;
  jsonLd?: object;
}

export function SEO({
  title,
  description,
  url,
  image = '/images/og-default.jpg',
  type = 'website',
  canonical,
  siteName = 'IntraWeb Technologies',
  twitterCard = 'summary_large_image',
  children,
  jsonLd,
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      {children}
    </Head>
  );
} 