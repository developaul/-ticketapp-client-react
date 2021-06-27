import { useCallback, useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'

import { getUserStorage } from '../helpers/getUserStorage'
import { useHideMenu } from '../hooks/useHideMenu'

const { Title, Text } = Typography

export const Desktop = () => {
  const [user] = useState(getUserStorage())
  const history = useHistory()
  useHideMenu(true)

  const _handleLeave = useCallback(() => {
    localStorage.clear()
    history.replace('/signin')
  }, [history])

  const _handleNext = useCallback(() => {
    console.log('next');
  }, [])

  if (!user?.agent || !user?.desktop) return <Redirect to="/signin" />

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success" >{user.desktop}</Text>
        </Col>
        <Col span={4} align="right">
          <Button
            shape="round"
            type="danger"
            onClick={_handleLeave}
            icon={<CloseCircleOutlined />}
          >
            Salir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col>
          <Text>Está atendiendo el ticket número: </Text>
          <Text
            style={{ fontSize: 30 }}
            type="danger"
          >
            55
          </Text>
        </Col>
      </Row>
      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={_handleNext}
            shape="round"
            type="primary"
            icon={<RightOutlined />}
          >
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  )
}
