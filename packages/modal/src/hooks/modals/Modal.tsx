import { useRef, useEffect } from 'react'
import { useClickAway } from 'react-use'
import modalCss from '../../assets/css/modal.module.scss'
type Props = {
  componentName: any,
  props: any,
  isShow: boolean,
  closeFunction: Function
}

function Modal({ componentName, props, isShow, closeFunction }: Props) {
  console.log(componentName)
  console.log(props)

  useEffect(() => {
  if (!isShow) return
    console.log('mount')

    return () => {
      console.log('unmount')
    }
  }, [isShow])

  const ref = useRef(null)
  useClickAway(ref, () => {
    // TODO: click outside to close
    console.log('OUTSIDE CLICKED')
    closeFunction()
  });
  // TODO: dynamic props and component
  return (
    <div className={modalCss.modalMask}>
      <div className={modalCss.modalWrapper}>
        <div ref={ref} className={modalCss.modalContainer}>
          <div className={modalCss.modalHeader}>
            header
          </div>
          <div className={modalCss.modalBody}>
            body
          </div>
          <div className={modalCss.modalFooter}>
            footer
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
