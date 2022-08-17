import { useRef, useEffect, lazy, Suspense } from 'react'
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
}

const componentData = {
  'InputModal': lazy(() => import('./components/InputModal')),
  'AlertModal': lazy(() => import('./components/Alert'))
}


function Modal({ componentName, props, isShow }: Props) {
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
    <div className={modalCss.modalMask}>
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
}

export default Modal
