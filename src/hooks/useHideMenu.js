import { useContext, useEffect } from 'react'
import { IUContext } from '../context/IUContext'

export const useHideMenu = (hideMenu) => {

  const { _handleShowMenu, _handleHideMenu } = useContext(IUContext)

  useEffect(() => {

    if (hideMenu)
      _handleHideMenu()
    else
      _handleShowMenu()

  }, [_handleHideMenu, _handleShowMenu, hideMenu])
}
