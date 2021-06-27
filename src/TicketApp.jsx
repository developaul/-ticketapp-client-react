import { RouterPage } from './pages/RouterPage'
import { IUContextProvider } from './context/IUContext'
import { SocketProvider } from './context/SocketContext'

export const TicketApp = () => {
  return (
    <SocketProvider>
      <IUContextProvider>
        <RouterPage />
      </IUContextProvider>
    </SocketProvider>
  )
}
