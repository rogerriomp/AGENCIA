import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Upload, message, Button, Modal, Select, Tabs, DatePicker, Input  } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;
const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

class Formulario_Iprev extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible:true,
        nascimento: '05/06/1989',
        select_permission: undefined,
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },

    }
    this.convertData = this.convertData.bind(this)
    }

    convertData(str) {
      var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
      return [day,mnth,date.getFullYear()].join("/");
  }

  
    onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.success(`${info.file.name} file uploaded successfully`);
        }
    }

    
  
   
    render() {
      return (
        <div>
 <Modal
                width={800}
                title="Formulário de Pedido de Aposentadoria"
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


<h1>Dados Pessoais</h1>
<hr></hr>
<table>
                <tr>
                  <th>
              <b>Nome:</b> 
              <Input placeholder="Nome" />
              </th>
              <th>
              <b>Matricula:</b> 
              <Input placeholder="Matricula" />
              </th>
              </tr>
             
              <tr>
                  <th>
                    RG:
                    <Input placeholder="RG" />
                    </th>
                    <th>
                      CPF:
                      <Input placeholder="CPF" 
                      maxLength='14'
                      onChange={this.handlechangeCPF}
                      />
                      </th>
                    </tr>

              
              
              <tr>
                  <th>
              <b>E-mail:</b> 
              <Input placeholder="E-mail" />
              </th>
              <th>
              <b>Telefone:</b> 
              <Input 
              placeholder="Telefone" 
              onChange={e =>this.setState({telefone:formatToPhone(e.target.value)})}  />
              </th>
              </tr>
              <tr>      
                        <th>
                          Data de Nascimento:<br/>
                          <DatePicker format={dateFormatList}
                                        onChange={(e) => {if(e!==null) {this.setState({ 'nascimento': this.convertData(e._d) })}}} />
                          </th>
    
                </tr>
</table>
<br/>
<h1>Dados de Endereço</h1>
<hr></hr>
<table>
                    <tr>
                        <th>
                        <b>CEP:</b> 
              <Input placeholder="CEP" />
                            </th>
                        </tr>
                    </table>
                
                <table>
                <tr>
  <td colspan="2">
              <b>Rua:</b> 
              <Input placeholder="Rua" />
              </td>
              <td>
              <b>Nº:</b> 
              <Input placeholder="Nº" />
                </td>
              </tr>
              <tr>
                  <th>
              <b>Bairro:</b> 
              <Input placeholder="Bairro" />
              </th>
              <th>
            Cidade:<br/>
            <Select
    labelInValue
    defaultValue={{ value: '1' }}
    style={{ width: 190}}
    onChange={(e) => { this.setState({ 'select_permission': e }) }}
  >
    <Option value="1">Florianópolis</Option>
    <Option value="2">Biguaçu</Option>
    <Option value="3">Palhoça</Option>
  </Select>
  </th>
  <th>
            UF:<br/>
            <Select
    labelInValue
    defaultValue={{ value: '1' }}
    style={{ width: 190}}
    onChange={(e) => { this.setState({ 'select_permission': e }) }}
  >
    <Option value="1">SC</Option>
    <Option value="2">SP</Option>
    <Option value="3">RS</Option>
  </Select>
  </th>
      </tr>
      <tr>
          <td colSpan="2">
                <b>Complemento:</b><br/>
                <Input placeholder="Complemento" />
              </td>
          </tr>
                    </table>
                    <br/>
                <h1>Documentos</h1>
                <hr></hr>
<p>* Documentos obrigatórios</p>
<table>
    <tr>
    <th>
                <Upload {...this.state}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
    </th>
    <th>

          <></>
      </th>
    <th>
<b>Certidão de Nascimento ou Casamento</b>
      </th>
      </tr>

      <tr>
    <th>
                <Upload {...this.state}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
    </th>
    <th>

          <></>
      </th>
    <th>
<b>Comprovante de Residencia</b>
      </th>
      </tr>

      <tr>
    <th>
                <Upload {...this.state}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
    </th>
    <th>

          <></>
      </th>
    <th>
<b>Comprovante de Contribuição</b>

      </th>
      </tr>

      </table>


                </Modal>
        </div>
      );
    }
  }
  
  export default Formulario_Iprev;
  
  
  