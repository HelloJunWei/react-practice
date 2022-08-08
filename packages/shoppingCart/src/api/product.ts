import axios  from 'axios'
import type { Product } from '../types/product'

const productAxios = axios.create({
  baseURL: 'http://localhost:4000/'
})

export const getProductList = async(): Promise<Product[]> => {
  try {
    const { data } = await productAxios.get<Product[]>('/product')
    return Promise.resolve(data)
  } catch (e) {
    return Promise.reject(e)
  }
}
