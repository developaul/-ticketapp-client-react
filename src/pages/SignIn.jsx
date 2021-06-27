
import { useCallback, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { SaveOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  InputNumber,
  Typography,
  Divider
} from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { getUserStorage } from '../helpers/getUserStorage';

const { Title, Text } = Typography

export const SignIn = () => {

  useHideMenu(false)
  const [user] = useState(getUserStorage())

  const history = useHistory()

  const onFinish = useCallback(({ agent, desktop }) => {
    localStorage.setItem('agent', agent)
    localStorage.setItem('desktop', desktop)
    history.push('/desktop')
  }, [history]);

  const onFinishFailed = useCallback((errorInfo) => {
    console.log('Failed:', errorInfo);
  }, []);

  if (user?.agent && user?.desktop) return <Redirect to="/desktop" />

  return (
    <>
      <Title level={2} >Ingresar</Title>
      <Text>Ingrese su nombre y número de escritorio</Text>
      <Divider />

      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nombre del agente"
          name="agent"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su nombre',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="desktop"
          rules={[
            {
              required: true,
              message: 'Ingrese el número de escritorio',
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
