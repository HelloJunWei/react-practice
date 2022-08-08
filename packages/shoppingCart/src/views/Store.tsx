import { useEffect, useState } from 'react'
import { getProductList } from '../api/product'
import type { Product } from '../types/product'

export default function Store () {
  const [productList , setProductList] = useState<Product[]>([])
  useEffect(() => {
    getProductList().then((data: Product[]) => {
      setProductList(data)
    })
  }, [])

  return (
    <div>
      <h1>store</h1>
      {
        productList.map((val) => {
          return <p key={val.id}> { val.name } </p>
        })
      }
    </div>
  )
}
