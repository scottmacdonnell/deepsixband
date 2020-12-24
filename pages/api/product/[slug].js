import { products } from '../../../data/products'

export default function productHandler({ query: { slug } }, res) {
  const product = products.find(product => product.slug === slug)
  if (product.slug) {
    res.status(200).json(product)
  } else {
    res.status(404).json({ message: `Product not found.` })
  }
}