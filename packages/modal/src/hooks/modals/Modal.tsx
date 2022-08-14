import modalCss from '../../assets/css/modal.module.scss'
type Props = {
  componentName: any,
  props: any
}

function Modal({ componentName, props }: Props) {
  console.log(componentName)
  console.log(props)
  // TODO: dynamic props and component
  return (
    <div className={modalCss.modalMask}>
      <div className={modalCss.modalWrapper}>
        <div className={modalCss.modalContainer}>
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
