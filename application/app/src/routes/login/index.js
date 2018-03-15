import React from 'react'
import { connect } from 'dva'

// import styles from './index.less'


class Login extends React.Component {
    render() {
      return (
       <div>login</div>

      );
    }
    
  }
  
  Login.propTypes = {
  };
  
  export default connect()(Login);
  