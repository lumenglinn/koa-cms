import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import { MyLayout } from '../components'
import 'antd/dist/antd.css';
const { Content} = Layout;
const { MySider, MyHeader, MyFooter } = MyLayout;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <MySider />
        <Layout>
          <MyHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              content
            </div>
          </Content>
          <MyFooter/>
        </Layout>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
