import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, AutoComplete, Upload, message } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';

import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const dateFormat = 'DD/MM/YYYY';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

const children = [];

children.push(<Option key="1">Rádio</Option>);
children.push(<Option key="2">Jornal</Option>);
children.push(<Option key="3">Outros</Option>);



class TabelaPreco extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      select_permission: undefined,
      mapas: [],
      mapa: "",
      photo: "",
    }

  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }



  render() {

    const onSelectMapas = (value, option) => {
      this.setState({ mapa: option.key })
    };

    const handleSearchMapas = (value) => {
      this.setState({
        mapas: new Array("JANEIRO - 2020", "DEZEMBRO - 2021", "FEVERIRO - 2019").map((value, id) => {
          return {
            key: id,
            value: value,
          };
        })
      })
      // fetch('/api/consulta_mapapi', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     'consulta_anunciante': { 'nome': value },
      //   })
      // })
      //   .then((r) => r.json())
      //   .then((json) => {
      //     var dados = json.anunciantes.map(anunciante => {
      //       return {
      //         value: anunciante.key + ' - ' + anunciante.nome,
      //         key: anunciante.key,
      //         label: (
      //           <div
      //             style={{
      //               display: 'flex',
      //               justifyContent: 'space-between',
      //             }}
      //           >
      //             <span>
      //               {anunciante.nome}
      //             </span>
      //           </div>
      //         ),
      //       }
      //     });

      //     this.setState({ anunciantes: dados })
      //   })
    };

    const onChange = (info) => {
      const { status } = info.file;
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        this.setState({ photo: info.file })
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    }

    const dummyRequest = ({ file, onSuccess }) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    };


    const props = {
    };
    return (
      <div>
        <Modal
          width={600}
          title="Tabela de Preços"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={() => this.props.callback({ 'cadastrar_tabela': false })}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={console.log()}>
              Cadastrar
            </Button>,
          ]}
        >
          <table>

            <tr>
              <th valign="bottom" align="right" >
                Inicial:<> </>
              </th>
              <th>
                <b>Ano:</b>
                <Input placeholder="Ano" />
              </th>
              <th>
                Mês:<br />
                <Select
                  labelInValue
                  defaultValue={{ value: '1' }}
                  style={{ width: 190 }}
                  size="12"
                  onChange={(e) => { this.setState({ 'select_permission': e }) }}
                >
                  <Option value="1">Janeiro</Option>
                  <Option value="2">Fevereiro</Option>
                  <Option value="3">Março</Option>
                  <Option value="4">Abril</Option>
                  <Option value="5">Maio</Option>
                  <Option value="6">Junho</Option>
                  <Option value="7">Julho</Option>
                  <Option value="8">Agosto</Option>
                  <Option value="9">Setembro</Option>
                  <Option value="10">Outubro</Option>
                  <Option value="11">Novembro</Option>
                  <Option value="12">Dezembro</Option>
                </Select>
              </th>
            </tr>
            <tr>
              <th valign="bottom" align="right" >
                Final: <> </>
              </th>

              <th>
                <b>Ano:</b>
                <Input placeholder="Ano" />
              </th>
              <th>
                Mês:<br />
                <Select
                  labelInValue
                  defaultValue={{ value: '1' }}
                  style={{ width: 190 }}
                  onChange={(e) => { this.setState({ 'select_permission': e }) }}
                >
                  <Option value="1">Janeiro</Option>
                  <Option value="2">Fevereiro</Option>
                  <Option value="3">Março</Option>
                  <Option value="4">Abril</Option>
                  <Option value="5">Maio</Option>
                  <Option value="6">Junho</Option>
                  <Option value="7">Julho</Option>
                  <Option value="8">Agosto</Option>
                  <Option value="9">Setembro</Option>
                  <Option value="10">Outubro</Option>
                  <Option value="11">Novembro</Option>
                  <Option value="12">Dezembro</Option>
                </Select>
              </th>
            </tr>

          </table>
          <br />
          <table>
            <tr>
              <th>
                Tipo de Veiculo:
              </th>

              <th width="70%">


                <Select
                  style={{ width: '100%' }}
                  mode="multiple"
                  onChange={this.handleChange}
                >
                  {children}
                </Select>

              </th>
            </tr>
            <tr>

              <th>
                Mapa/PI:
              </th>
              <th>

                <AutoComplete
                  dropdownMatchSelectWidth={252}
                  style={{
                    width: 310,
                  }}
                  options={this.state.mapas}
                  onSelect={onSelectMapas}
                  onSearch={handleSearchMapas}>
                  <Input.Search size="large" placeholder="Mapa/PI" enterButton />
                </AutoComplete>
              </th>
            </tr>
          </table>
          <table>
            <tr>
              <th>

                <Dragger style={{ width: 445, }}
                  name='file'
                  multiple={false}
                  customRequest={dummyRequest}
                  onChange={onChange}
                  maxCount={1}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Clique ou arraste uma imagem</p>
                </Dragger>
              </th>
            </tr>
          </table>
        </Modal>
      </div>
    );
  }
}

export default TabelaPreco;


