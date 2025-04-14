import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/actions/'],
      },
    ],
    sitemap: 'https://cooins.co/sitemap.xml',
    host: 'https://cooins.co',
  }
}