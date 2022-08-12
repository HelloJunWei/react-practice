import { useEffect, useState } from 'react'
import { getProductList } from '../api/product'
import StoreCard from '../components/StoreCard'
import type { Product } from '../types/product'

export default function Store () {
  const [productList , setProductList] = useState<Product[]>([])
  useEffect(() => {
    let didCancel = false
    if (didCancel) return
    getProductList().then((data: Product[]) => {
      setProductList(data)
    })
    // unmounted 的時候不會觸發 useEffect
    return () => { didCancel = true }
  }, [])

  return (
    <div className="flex justify-center items-center flex-col">
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
