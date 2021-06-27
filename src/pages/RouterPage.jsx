import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { SignIn } from './SignIn'
import { Desktop } from './Desktop';
import { CreateTicket } from './CreateTicket';
import { Queue } from './Queue';

const { Sider, Content } = Layout;

export const RouterPage = () => {
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <Sider collapsedWidth="0" breakpoint="md">
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/signin">
                Ingresar
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="queue">
                Cola
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="create">
                Crear ticket
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/signin" component={SignIn} />
              <Route path="/queue" component={Queue} />
              <Route path="/create" component={CreateTicket} />
              <Route path="/desktop" component={Desktop} />
              <Redirect to="/signin" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  )
}
