import { createContext, useContext, ReactNode } from 'react'

type ModalContextProviderType = {
  children: ReactNode,
  closeModal: () => void
}

type ModalContextType = {

  closeModal: () => void
}

const ModalContext = createContext({} as ModalContextType)

export function useModalContext () {
  return useContext(ModalContext)
}

export function ModalContextProvider({ children, closeModal }: ModalContextProviderType) {
  return (
    <ModalContext.Provider value={{
      closeModal
    }}>
      { children }
    </ModalContext.Provider>
  )
}
