import {
  useCallback,
  useContext,
  useState
} from 'react'
import { DownloadOutlined } from '@ant-design/icons'
import {
  Button,
  Col,
  Row,
  Typography
} from 'antd'

import { SocketContext } from '../context/SocketContext'
import { useHideMenu } from '../hooks/useHideMenu'

const { Title, Text } = Typography

export const CreateTicket = () => {
  useHideMenu(true)

  const { socket } = useContext(SocketContext)
  const [currentTicket, setCurrentTicket] = useState(null)

  const _handleGenerateNewTicket = useCallback(() =>
    socket.emit('generate-ticket', null, newTicket => {
      setCurrentTicket(newTicket)
    }), [socket])

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>Presione el botón para un nuevo ticket</Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={_handleGenerateNewTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      {currentTicket &&
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={6} align="center">
            <Text level={2}>Su número</Text>
            <br />
            <Text type="success" style={{ fontSize: 55 }}>{currentTicket.number}</Text>
          </Col>
        </Row>
      }
    </>
  )
}
