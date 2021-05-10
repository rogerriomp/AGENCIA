import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker, Table } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import TabelaPreco from './Tabela_Preco'

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;

const columns = [
    {
      title: 'Data Inicial',
      dataIndex: 'dataInicial',
    },
    {
      title: 'Data Final',
      dataIndex: 'dataFinal',
    },
  ];
  
  const data = [];
  for (let i = 0; i < 8; i++) {
    data.push({
      key: i,
      dataInicial: `01/01/200${i}`,
      dataFinal: `01/01/200${i}`,
      address: `R$ 50${i},00`,
    });
  }


class PesqTabPreco extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible:true,
        select_permission: undefined,
        cadastrar_tabela: false,
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
        data: '05/09/1964',
        
         }
this.Update = this.Update.bind(this)
this.start = this.start.bind(this)
this.onSelectChange = this.onSelectChange.bind(this)
this.convertData = this.convertData.bind(this)

    }
    Update(e){
        this.setState(e)
    }
    convertData(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day,mnth,date.getFullYear()].join("/");
    }
      start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      };
    
      onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      };
    

    
  
   
    render() {

        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
          selectedRowKeys,
          onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
      
        return (
          
        <div>
 <Modal
                width={600}
                title="Pesquisa Tabela de Preços"
                visible={this.state.visible}
                footer={[
                    <Button key="back" onClick={console.log()}>
                        Cancelar
              </Button>,                    
              <Button key="Cadastrar" type="primary" onClick={console.log()}>
                        Atualizar Tabela
              </Button>,
                    <Button key="Cadastrar" type="primary" onClick={()=> this.Update({'cadastrar_tabela':true})}>
                        Novo
              </Button>,
                ]}
            >
 <div>
            <table>
              <tr>
                  <th>
                    Ano Inicio
                    <Input placeholder="Ano" />                    </th>
                    <th>
            Mês Inicio:<br/>
            <Select
    labelInValue
    defaultValue={{ value: '1' }}
    style={{ width: 190}}
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
                  <th>

                    </th>
                    </tr>
                
                </table>
                <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.start} loading={loading}>
            Pesquisar  
          </Button><>  </>

          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${this.state.selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
          </div>


                
                </Modal>
                {this.state.cadastrar_tabela ===true &&
                <TabelaPreco callback={(e)=> this.setState(e)}/>
            }
             
        </div>
      );
    }
  }
  
  export default PesqTabPreco;
  
  
  