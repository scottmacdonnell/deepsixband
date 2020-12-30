import dynamic from 'next/dynamic'

import TwitterSkeleton from './TwitterSkeleton/'

export default function Twitter() {
  let Timeline = dynamic(
    () => import('./Timeline/'),
    { loading: () => <TwitterSkeleton /> }
  )
  return (
    <div className="Twitter">
      <Timeline />
    </div>
  )
}