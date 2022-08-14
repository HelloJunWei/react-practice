import { useRef } from 'react'
import { useClickAway } from 'react-use'
import modalCss from '../../assets/css/modal.module.scss'
type Props = {
  componentName: any,
  props: any
}

function Modal({ componentName, props }: Props) {
  console.log(componentName)
  console.log(props)

  const ref = useRef(null)
  useClickAway(ref, () => {
    // TODO: click outside to close
    console.log('OUTSIDE CLICKED')
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
