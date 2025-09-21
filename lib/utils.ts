import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export function getSponsorTierColor(tier: string): string {
  const colors = {
    title: 'bg-yellow-500',
    platinum: 'bg-gray-300',
    gold: 'bg-yellow-400',
    silver: 'bg-gray-400',
    bronze: 'bg-orange-600',
  }
  return colors[tier as keyof typeof colors] || 'bg-gray-200'
}

export function getSponsorTierPriority(tier: string): number {
  const priorities = {
    title: 1,
    platinum: 2,
    gold: 3,
    silver: 4,
    bronze: 5,
  }
  return priorities[tier as keyof typeof priorities] || 999
}