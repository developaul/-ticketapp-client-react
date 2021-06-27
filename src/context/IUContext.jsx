import { createContext, useState } from 'react'

export const IUContext = createContext()

export const IUContextProvider = ({ children }) => {

  const [hideMenu, setHideMenu] = useState(false)

  const _handleShowMenu = () => setHideMenu(false)
  const _handleHideMenu = () => setHideMenu(true)

  return (
    <IUContext.Provider
      value={{
        hideMenu,
        _handleShowMenu,
        _handleHideMenu
      }}
    >
      {children}
    </IUContext.Provider>
  )
}
