import { useEffect, useState } from 'react'
import { getProductList } from '../api/product'
import StoreCard from '../components/StoreCard'
import type { Product } from '../types/product'

export default function Store () {
  const [productList , setProductList] = useState<Product[]>([])
  useEffect(() => {
    getProductList().then((data: Product[]) => {
      setProductList(data)
    })
  }, [])

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>store</h1>
      {
        productList.map((val) => {
          return <StoreCard
            id={val.id}
            key={val.id}
            imgUrl={val.imgUrl}
            name={val.name}
            price={val.price} />
        })
      }
    </div>
  )
}
