import formatCurrency from '../utils/formatCurrency'
import PrimaryButton from '../components/PrimaryButton'
import {useState} from 'react'
type Props = {
  id: string
  imgUrl: string,
  name: string
  price: number
}
export default function ({ imgUrl, name, price, id }: Props) {
  const [quantity, setQuantity] = useState(0)

  const AddQuantity = () => {
    setQuantity((quantity) => quantity + 1 )
  }

  const subtractionQuantity = () => {
    setQuantity((quantity) => quantity - 1 )
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
            <PrimaryButton className="w-full" onClick={AddQuantity}>加入到購物車</PrimaryButton> :
            <div className="flex justify-center flex-col items-center">
              <div className="flex items-center">
                <PrimaryButton onClick={subtractionQuantity}>-</PrimaryButton>
                <span className="mx-2">數量 {quantity}</span>
                <PrimaryButton onClick={AddQuantity}>+</PrimaryButton>
              </div>
              Bye 
            </div>
        }
      </div>
    </div>
  )
}
