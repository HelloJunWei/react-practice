import { useEffect } from 'react'
import { useModalContext } from '../context/modalContext'

export type AlertProps = {
  text: string
}

export default function (props: AlertProps) {
  const { closeModal } = useModalContext()
  const { text } = props

  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal()
      clearTimeout(timer)
    }, 1500)
    return () => { if (timer) clearTimeout(timer) }
  }, [])

  

  return (
    <div>
      { text } 
    </div>
  )
}
