import formatCurrency from '../utils/formatCurrency'
import MyButton from '../components/MyButton'
import { useShoppingCart } from '../context/ShoppingCartContext'
type Props = {
  id: string
  imgUrl: string,
  name: string
  price: number
}
export default function ({ imgUrl, name, price, id }: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()

  const quantity = getItemQuantity(id)

  const AddQuantity = () => {
    increaseCartQuantity(id)
  }

  const subtractionQuantity = () => {
    decreaseCartQuantity(id)
  }

  const removeQuantity = () => {
    removeFromCart(id)
  }
  return (
    <div className="max-w-[700px] w-11/12 my-2 shadow-md">
      <img className="w-full object-cover" src={imgUrl} />
      <div className="flex justify-between items-center px-2">
        <span className="font-bold text-2xl">{name}</span>
        <span className="font-bold text-2xl text-slate-500">
          {formatCurrency(price)}
        </span>
      </div>
      <div className="my-2 mx-2">
        { quantity === 0 ?
            <MyButton className="w-full" onClick={AddQuantity}>加入到購物車</MyButton> :
            <div className="flex justify-center flex-col items-center">
              <div className="flex items-center">
                <MyButton onClick={subtractionQuantity}>-</MyButton>
                <span className="mx-2">數量 {quantity}</span>
                <MyButton onClick={AddQuantity}>+</MyButton>
              </div>
              <MyButton className="mt-3" danger onClick={removeQuantity}>移除</MyButton>
            </div>
        }
      </div>
    </div>
  )
}
