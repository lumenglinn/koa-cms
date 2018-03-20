import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.css';
const { Sider } = Layout;

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
                    <Menu.Item key="1" >
                        <Link to='/user' >
                            <Icon type="user" />
                            <span className="nav-text">nav 1</span>
                        </Link>
                    </Menu.Item >
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>

        );
    }

}

MySider.propTypes = {
};

export default MySider;
