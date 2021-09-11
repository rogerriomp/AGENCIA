import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';
import Routes from './Router';



class LoginAgencia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    const onFinish = (values) => {
      console.log(values)
      fetch('/auth', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'usuario': values.username,
          'senha': values.password,
        })
      })
        .then((r) => r.json())
        .then((json) => {

          if ('token' in json) {
            this.props.history.push('/');
            return <Routes />
          }
          if ('msg' in json) {
            alert(json.msg)
          } else {
            alert(json)
          }
        })
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <div style={{margin: 'auto', width: '20%', border: '3px solid #1890ff', padding: '10px' }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <table>

            <tr>
              <th style={{ width: '80%' }}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </th>
            </tr>
            <tr>
              <th>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

              </th>
            </tr>
            <tr>
              <th>
                <Form.Item
                  wrapperCol={{
                    offset: 5,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </th>
            </tr>
          </table>
        </Form>
      </div>
    );
  }
}

export default withRouter(LoginAgencia);


