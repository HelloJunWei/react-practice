import { useState, useCallback } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from './Modal'
import { ModalContextProvider } from './context/modalContext'

type Props = {
  componentName: any,
  props: any,
  setCloseModalFn: (fn: () =>void) => void
  removeChild: Function
}

export default function () {

  const openModal = function (component: any, props: any) {
    const container = document.createElement('div')
    // TODO: id 要動態產生
    container.setAttribute('id', 'modal')
    document.body.appendChild(container)

    const removeChild = () => {
      setTimeout(() => {
        console.log('here')
        container.parentNode!.removeChild(container)
      }, 500)
    }

    let _closeModal: null | Function = null
    const setCloseModalFn = (fn: () => void) => {
      _closeModal = fn
    }
    // 這裡不能用hook
    
    //TODO: component and props
    ReactDOM.createRoot(document.getElementById('modal') as HTMLElement).render(
      <React.StrictMode>
        <Mock
          componentName={component}
          props={props}
          setCloseModalFn={setCloseModalFn}
          removeChild={removeChild}
        />
      </React.StrictMode>
    )

    return {
      closeModal: () => {
        if(_closeModal) _closeModal()
        removeChild()
      }
    }
  }
  return {
    openModal,
  }
}

function Mock({ componentName, props, setCloseModalFn, removeChild }: Props) {
  const [isShow, setIsShow] = useState(true)
  setCloseModalFn(() => { 
    setIsShow(false)
  })

  const closeFunction = useCallback(() => {
    setIsShow(false)
    removeChild()
  }, [])

  if (!isShow) return null

  //TODO: 利用 context 把 closeModal 傳下去

  return (
    <ModalContextProvider closeModal={closeFunction}>
      <Modal componentName={componentName} props={props} isShow={isShow} />
    </ModalContextProvider>
  )
}

