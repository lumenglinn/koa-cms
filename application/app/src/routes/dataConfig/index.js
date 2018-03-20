import React from 'react'
import { connect } from 'dva'
import { Layout } from 'antd'
// import { Layout,  Select } from 'antd'
import { MyLayout } from '../../components'
import 'antd/dist/antd.css';
const { Content } = Layout;
const { MySider, MyHeader, MyFooter } = MyLayout;
// const { TextArea } = Input;
// const FormItem = Form.Item;
// const Option = Select.Option;

class DataConfig extends React.Component {
  // constructor(props) {
  //   super(props);

  //   const value = this.props.value || {};
  //   this.state = {
  //     number: value.number || 0,
  //     currency: value.currency || 'rmb',
  //   };
  // }
  // componentWillReceiveProps(nextProps) {
  //   // Should be a controlled component.
  //   if ('value' in nextProps) {
  //     const value = nextProps.value;
  //     this.setState(value);
  //   }
  // }
  // handleNumberChange = (e) => {
  //   const number = parseInt(e.target.value || 0, 10);
  //   if (isNaN(number)) {
  //     return;
  //   }
  //   if (!('value' in this.props)) {
  //     this.setState({ number });
  //   }
  //   this.triggerChange({ number });
  // }
  // handleCurrencyChange = (currency) => {
  //   if (!('value' in this.props)) {
  //     this.setState({ currency });
  //   }
  //   this.triggerChange({ currency });
  // }
  // triggerChange = (changedValue) => {
  //   // Should provide an event to pass value to Form.
  //   const onChange = this.props.onChange;
  //   if (onChange) {
  //     onChange(Object.assign({}, this.state, changedValue));
  //   }
  // }
  render() {
    // const { size } = this.props;
    // const state = this.state;
    return (
      <Layout>
        <MySider />
        <Layout>
          <MyHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            {/* <div style={{ padding: 24, background: '#fff', minHeight: 500 }}>
              Input
              type="text"
              size={size}
              value={state.number}
              onChange={this.handleNumberChange}
              style={{ width: '65%', marginRight: '3%' }}
              />
              <Select
                value={state.currency}
                size={size}
                style={{ width: '32%' }}
                onChange={this.handleCurrencyChange}
              >
                <Option value="rmb">RMB</Option>
                <Option value="dollar">Dollar</Option>
              </Select>
            </div> */}


            njojojko
          </Content>
          <MyFooter />
        </Layout>
      </Layout>
      // <span>
      //   <Input
      //     type="text"
      //     size={size}
      //     value={state.number}
      //     onChange={this.handleNumberChange}
      //     style={{ width: '65%', marginRight: '3%' }}
      //   />
      //   <Select
      //     value={state.currency}
      //     size={size}
      //     style={{ width: '32%' }}
      //     onChange={this.handleCurrencyChange}
      //   >
      //     <Option value="rmb">RMB</Option>
      //     <Option value="dollar">Dollar</Option>
      //   </Select>
      // </span>
    );
  }
}

// class Demo extends React.Component {
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   }
//   checkPrice = (rule, value, callback) => {
//     if (value.number > 0) {
//       callback();
//       return;
//     }
//     callback('Price must greater than zero!');
//   }
  // render() {
  //   const { getFieldDecorator } = this.props.form;
  //   return (
  //     <Form layout="inline" onSubmit={this.handleSubmit}>
  //       <FormItem label="Price">
  //         {getFieldDecorator('price', {
  //           initialValue: { number: 0, currency: 'rmb' },
  //           rules: [{ validator: this.checkPrice }],
  //         })(<PriceInput />)}
  //       </FormItem>
  //       <FormItem>
  //         <Button type="primary" htmlType="submit">Submit</Button>
  //       </FormItem>
  //     </Form>
  //   );
  // }

//   render() {
//     const { getFieldDecorator } = this.props.form;
//     return (
//       <Layout>
//         <MySider />
//         <Layout>
//           <MyHeader />
//           <Content style={{ margin: '24px 16px 0' }}>
//             <div style={{ padding: 24, background: '#fff', minHeight: 500 }}>
//               <Form layout="inline" onSubmit={this.handleSubmit}>
//                 <FormItem label="Price">
//                   {getFieldDecorator('price', {
//                     initialValue: { number: 0, currency: 'rmb' },
//                     rules: [{ validator: this.checkPrice }],
//                   })(<PriceInput />)}
//                 </FormItem>
//                 <FormItem>
//                   <Button type="primary" htmlType="submit">Submit</Button>
//                 </FormItem>
//               </Form>
//             </div>
//           </Content>
//           <MyFooter />
//         </Layout>
//       </Layout>

//     );
//   }

// }

DataConfig.propTypes = {
};

export default connect()(DataConfig);



