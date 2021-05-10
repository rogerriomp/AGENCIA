import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';


class BASE extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible:true,
        select_permission: undefined,
         }

    }

    
  
   
    render() {
      return (
        <div>
 <Modal
                width={600}
                title="Cadastro de Funcionários"
                visible={this.state.visible}
                footer={[
                    <Button key="back" onClick={console.log()}>
                        Cancelar
              </Button>,
                    <Button key="Cadastrar" type="primary" onClick={console.log()}>
                        Cadastrar
              </Button>,
                ]}
            >
                <h1>OK</h1>
                </Modal>
        </div>
      );
    }
  }
  
  export default BASE;
  
  
  