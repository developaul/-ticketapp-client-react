import { RouterPage } from './pages/RouterPage'
import { IUContextProvider } from './context/IUContext'

export const TicketApp = () => {
  return (
    <IUContextProvider>
      <RouterPage />
    </IUContextProvider>
  )
}
