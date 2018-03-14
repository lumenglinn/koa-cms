import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout, Icon , Menu, Avatar } from 'antd';
import 'antd/dist/antd.css';
import Config from '../utils/config'
const {Header, Sider, Content, Footer} = Layout

class IndexPage extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  
  render() {
    return (
      // <div className={styles.normal}>
      //   <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      //   <div className={styles.welcome} />
      //   <ul className={styles.list}>
      //     <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
      //     <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      //   </ul>
      //   <Button>Hello world!</Button> 
      // </div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className={styles.logo}>哎哟哎呀</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} onClick={this.handleClick}>
            <Menu.Item key="1" >
              <Icon type="user"/>
              <span className="nav-text">nav 1</span>
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
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >
          <Avatar className={styles.userIcon} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          {Config.footerText}
          </Footer>
        </Layout>
      </Layout>
    );
  }
  
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
