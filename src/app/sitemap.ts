import { type MetadataRoute } from 'next'
import { currencies } from '@/utils/currencies'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/about',
    '/policies/privacy',
    '/policies/terms',
  ]

  const convertRoutes: string[] = []

  currencies.forEach(from => {
    currencies.forEach(to => {
      if (from.code !== to.code) {
        convertRoutes.push(`/convert/${from.code.toLowerCase()}-to-${to.code.toLowerCase()}`)
      }
    })
  })

  const allRoutes = [...staticRoutes, ...convertRoutes]

  const baseUrl = 'https://cooins.co'

  return allRoutes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))
}