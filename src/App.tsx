import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons";
import { Layout, Menu } from 'antd'
const { Content, Header, Sider } = Layout
function App() {
  const [count, setCount] = useState(0)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ height: '100vh'}}>
      <Header style={{ background: "white" }}>
      <div className="logo" />
          {collapsed ? (
            <MenuUnfoldOutlined onClick={() => setCollapsed(!collapsed)} />
          ) : (
            <CloseOutlined onClick={() => setCollapsed(!collapsed)} />
          )}
      </Header>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu></Menu>
        </Sider>
        <Content>

        </Content>
      </Layout>
    </Layout>
  )
}

export default App
