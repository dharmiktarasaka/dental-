import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, canonicalUrl, schemaMarkup, ogType = 'website', ogImage }) {
  const defaultTitle = "Premium Dental Clinic Ahmedabad | Modern Painless Dentistry";
  const defaultDesc = "Experience modern, comfortable, and personalized dental treatments in Ahmedabad from trusted professionals. Implants, RCT, aligners, and emergency care.";
  const siteUrl = "https://tarasaka-dental.com";
  
  const pageTitle = title ? `${title} | Premium Dental Clinic` : defaultTitle;
  const pageDesc = description || defaultDesc;
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : `${siteUrl}`;
  const image = ogImage || `${siteUrl}/assets/clinic-banner.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDesc} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data Schema */}
      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
