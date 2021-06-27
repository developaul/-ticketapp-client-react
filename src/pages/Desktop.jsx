import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { useCallback } from 'react'

const { Title, Text } = Typography

export const Desktop = () => {
  const _handleLeave = useCallback(() => {
    console.log('leave');
  }, [])

  const _handleNext = useCallback(() => {
    console.log('next');
  }, [])

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Paul</Title>
          <Text>Usted esta trabajando en el escritorio: </Text>
          <Text type="success" >5</Text>
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
          <Text>Está atentiendo el ticket número: </Text>
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
