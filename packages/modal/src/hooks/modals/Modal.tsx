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
    <div className={modalCss.modal}>
      modal
    </div>
  )
}

export default Modal
