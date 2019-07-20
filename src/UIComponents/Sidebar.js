import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        >
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="pie-chart" />
              <span>Inicio</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/categories">
              <Icon type="file" />
              <span>Categorias</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/products">
              <Icon type="desktop" />
              <span>Productos</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Clientes</span>
              </span>
            }
            >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default Sidebar;
