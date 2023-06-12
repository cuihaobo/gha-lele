import { Layout, Menu } from 'antd'
import { RouterMap } from './Router'
import { NavigationMenu } from './components/NavigationMenu'
const { Header, Content, Sider } = Layout

function App() {
  return (
    <Layout style={{ height: '100vh' }}>
      <NavigationMenu />
      <Layout>
        <Sider></Sider>
        <Content>
          <RouterMap />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
