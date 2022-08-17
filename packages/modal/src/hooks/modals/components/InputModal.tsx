import React from 'react'
import InputModalCss from '../../../assets/css/inputModal.module.scss'
import { useModalContext } from '../context/modalContext'
export type InputModalProps = {
  value?: string
  submit: (value: string) => Promise<void>
}
export default function ({ value, submit }: InputModalProps) {
  const { closeModal } = useModalContext()

  const [inputValue, setInputValue] = React.useState(value)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    await submit(inputValue || '')
    closeModal()
  }

  return (
    <div className={InputModalCss.p1}>
      <input value={inputValue} onChange={onChange} />
      <p>{inputValue}</p>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}
