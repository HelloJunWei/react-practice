import classnames from 'classnames'
import { useRef, useEffect, lazy, Suspense, forwardRef, createRef } from 'react'
import { useClickAway } from 'react-use'
import modalCss from '../../assets/css/modal.module.scss'
import { useModalContext } from './context/modalContext'
import MaterialIcon from '../../components/MaterialIcon'
import Loading from '../../components/Loading'
import type {
  ComplexActionType,
  ComponentAndProps,
  Props as DynamicComponentType,
  ComponentName
} from './type'

type Props = {
  isShow: boolean,
  componentName: ComponentName<ComponentAndProps>,
  props: DynamicComponentType<ComponentAndProps, ComplexActionType['component']>,
  classNames?: string
}

const componentData = {
  'InputModal': lazy(() => import('./components/InputModal')),
  'AlertModal': lazy(() => import('./components/Alert'))
}


const Modal = forwardRef<HTMLDivElement, Props>(( { classNames, componentName, props, isShow }, outRef) => {
  const modalRef = outRef || createRef<HTMLDivElement>()
  const classes = classnames(
    classNames,
    modalCss.modalMask
  )
  const { closeModal } = useModalContext()
  const Component = componentData[componentName]

  useEffect(() => {
    if (!isShow) return
    console.log('mount')

    return () => {
      console.log('unmount')
    }
  }, [isShow])

  const ref = useRef(null)
  useClickAway(ref, () => {
    closeModal()
  })
  return (
    <div className={classes} ref={modalRef}>
      <div className={modalCss.modalWrapper}>
      <Suspense fallback={<Loading />} >
        <div ref={ref} className={modalCss.modalContainer}>
          <div className={modalCss.cursorSide}>
            <MaterialIcon className={modalCss.cursorPointer} onClick={closeModal} icon="close" />
          </div>
          <Component {...props} />
        </div>
      </Suspense>
      </div>
    </div>
  )
})
export default Modal
