import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Config from '../../utils/config'
const { Footer } = Layout;

class MyHeader extends React.Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
          {Config.footerText}
          </Footer> 
        );
    }

}

MyHeader.propTypes = {
};

export default MyHeader;
