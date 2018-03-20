import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.css';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MySider extends React.Component {
    handleClick = (e) => {
        console.log('click ', e);
    }

    render() {
        return (
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                style={{ background: '#fff', padding: 0 }}
            >
                <div className={styles.logo}>哎哟哎呀</div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['4']} onClick={this.handleClick}>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Dashboard</span></span>}>
                        <MenuItemGroup key="g1" title="Item 1">
                            
                                <Menu.Item key="1"><Link to='/dataConfig' >dataConfig</Link></Menu.Item>
                            
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>

        );
    }

}

MySider.propTypes = {
};

export default MySider;
