import { useEffect } from 'react'
import { getProductList } from '../api/product'
export default function About () {
  useEffect(() => {
    getProductList().then(data => {
      console.log(data)
    })
  }, [])
  return (
    <h1>about</h1>
  )
}
