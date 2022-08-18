import { useState, useCallback, useRef, useEffect } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from './Modal'
import { ModalContextProvider } from './context/modalContext'
import { uuid4 } from '../../utils/utils'
import { CSSTransition } from 'react-transition-group'
import '../../assets/css/fadeTransition.css'
import type {
  SimpleType,
  ComplexActionType,
  ComponentAndProps,
  Props,
  ComponentName
  } from './type'


export default function () {
  // use function overload

  // 如果 component 沒有 props 這樣就可以 dispatch('component')
  // 後面就不用帶成這樣 dispatch('component', {})
  function openModal<T extends SimpleType['component']>(component: T): void
  // component 是有定義props 的話是走這個
  function openModal<T extends ComplexActionType['component']>(
    component: T,
    props: Props<ComponentAndProps, T>
  ): void

  function openModal (component: any, props?: any) {
    const container = document.createElement('div')
    const modalId = `modal-${uuid4()}`
    // TODO: id 要動態產生
    container.setAttribute('id', modalId)
    document.body.appendChild(container)

    const removeChild = () => {
      setTimeout(() => {
        container.parentNode!.removeChild(container)
      }, 500)
    }

    let _closeModal: null | Function = null
    const setCloseModalFn = (fn: () => void) => {
      _closeModal = fn
    }
    // 這裡不能用hook
    
    //TODO: component and props
    ReactDOM.createRoot(document.getElementById(modalId) as HTMLElement).render(
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

type MockProps = {
  componentName: ComponentName<ComponentAndProps>,
  props: Props<ComponentAndProps, ComplexActionType['component']>,
  setCloseModalFn: (fn: () =>void) => void
  removeChild: Function
}

function Mock({ componentName, props, setCloseModalFn, removeChild }: MockProps) {
  const [isShow, setIsShow] = useState(false)
  const ref = useRef(null)
  setCloseModalFn(() => { 
    setIsShow(false)
  })

  const closeFunction = useCallback(() => {
    setIsShow(false)
    removeChild()
  }, [])
  useEffect(() => {
    setIsShow(true)
    return () => setIsShow(false)
  }, [])

  // if (!isShow) return null

  return (
    <ModalContextProvider closeModal={closeFunction}>
      <CSSTransition
        in={isShow}
        timeout={500}
        classNames="fade"
        nodeRef={ref}
        unmountOnExit
      >
        <Modal
          classNames="fade"
          ref={ref}
          componentName={componentName}
          props={props}
          isShow={isShow}
        />
      </CSSTransition>
    </ModalContextProvider>
  )
}

