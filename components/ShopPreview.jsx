import Link from 'next/link'

export default function ShopPreview() {
  return (
    <div className="ShopPreview">
      <h1>ShopPreview</h1>
      <p>img</p>
      <Link href="/shop">
        <button>View Store</button>
      </Link>
    </div>
  )
}