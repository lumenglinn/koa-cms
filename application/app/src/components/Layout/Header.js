import React from 'react';
import { Layout, Avatar } from 'antd';
import 'antd/dist/antd.css';
import styles from './index.css';
const { Header } = Layout;

class MyHeader extends React.Component {
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0 }} >
                <Avatar className={styles.userIcon} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Header>
        );
    }

}

MyHeader.propTypes = {
};

export default MyHeader;
