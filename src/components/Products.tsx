import styled from 'styled-components'
import { ComplexTitle } from './ComplexTitle'
import { Product, ProductItem } from './ProductItem'

const products: Product[] = [
  { id: 1, name: 'chair', price: 30 },
  { id: 2, name: 'bed', price: 150 },
  { id: 3, name: 'couch', price: 550 },
]

export const Products = () => {
  return (
    <section>
      <ComplexTitle title="all product" />
      {products.map((product) => {
        return <ProductItem key={product.id} {...product} />
      })}
    </section>
  )
}
