'use client'

import { useState, useEffect } from 'react'

interface PortfolioData {
  personal: {
    name: string
    title: string
    bio: string
    email: string
    phone: string
    location: string
    profileImage: string
    resume: string
  }
  social: {
    github: string
    linkedin: string
    email: string
  }
  experience: any[]
  education: any[]
  skills: any[]
  projects: any[]
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/portfolio')
      if (!response.ok) {
        throw new Error('Failed to fetch portfolio data')
      }
      const portfolioData = await response.json()
      setData(portfolioData)
    } catch (err) {
      console.error('Error fetching portfolio data:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
      // Fallback to default data if API fails
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, refetch: fetchData }
}

