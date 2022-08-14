import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from './Modal'

export default function () {
  const container = document.createElement('div')
  // TODO: id 要動態產生
  container.setAttribute('id', 'modal')
  document.body.appendChild(container)

  const openModal = function (component: any, props: any) {
    //TODO: component and props
    ReactDOM.createRoot(document.getElementById('modal') as HTMLElement).render(
      <React.StrictMode>
        <Modal componentName={component} props={props} />
      </React.StrictMode>
    )
  }
  return {
    openModal
  }
}
