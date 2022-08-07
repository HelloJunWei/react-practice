import axios  from 'axios'
const productAxios = axios.create({
  baseURL: 'http://localhost:4000/'
})

export const getProductList = async() => {
  const data = await productAxios.get('/product')
  return data
}