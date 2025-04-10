'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function MobileRedirectWrapper({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // run once on load
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isMobile && pathname !== '/mobile-warning') {
      router.replace('/mobile-warning')
    }
  }, [isMobile, pathname, router])

  if (isMobile && pathname !== '/mobile-warning') return null

  return <>{children}</>
}
