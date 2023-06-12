import { Menu } from 'antd'
import { Link } from 'react-router-dom'

export const NavigationMenu = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </>
  )
}
