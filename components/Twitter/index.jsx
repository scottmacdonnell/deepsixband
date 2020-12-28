import dynamic from 'next/dynamic'

import TwitterSkeleton from './TwitterSkeleton/'

const Timeline = dynamic(
  () => import('./Timeline/'),
  { 
    loading: () => <TwitterSkeleton />,
    ssr: true
  }
)

export default function Twitter() {
  return (
    <div className="Twitter">
      <Timeline />
    </div>
  )
}