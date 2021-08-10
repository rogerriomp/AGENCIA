import React from 'react';
import { Modal, Button, Select, Tabs, DatePicker, Table } from 'antd';
import CadMapaPi from './Cadastro_MapaPI'
import moment from 'moment';


const yearFormat = 'YYYY';
const { Option } = Select;

const columns = [

  {
    title: 'Período',
    dataIndex: 'periodo',

  },
  {
    title: 'Ano',
    dataIndex: 'ano',

  },

];


const data =  [
  {
    key: 1, 
    periodo: "Janeiro", 
    periodo_cod: 1,
    ano: 2020
  }, 
  {
    key: 2, 
    periodo: "Janeiro", 
    periodo_cod: 1,
    ano: 2021
  }, 
  {
    key: 3, 
    periodo: "Fevereiro", 
    periodo_cod: 2,
    ano: 2021
  }, 
]


class PesquisaMapaPI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      select_permission: undefined,
      cadastrar_tabela: false,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      editar: false,
      novo: false,
      periodo: 0,
      data: [],
      year: new Date(),

    }
    this.Update = this.Update.bind(this)
    this.start = this.start.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.convertData = this.convertData.bind(this)
    this.novo = this.novo.bind(this)
    this.editar = this.editar.bind(this)
    // this.Consulta = this.Consulta.bind(this)

  }
  Update(e) {
    this.setState(e)
  }
  convertData(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
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
  novo() {
    this.setState({ 'novo': true })
  }


  editar() {
    if (this.state.selectedRowKeys.length === 1) {

      console.log(this.state.selectedRowKeys[0], '------------------Envio para edição')
      this.setState({ 'editar': true })
    } else {
      alert("Selecionar apenas uma opção para realizar a edição")
    }
  }



  CloseModal() {
    this.props.history.push('/')
    this.setState({
      visible: false,
    });
  }

  Consulta() {
    let newData = []
    let year = this.state.year
    if (year != ""){
      year = moment(this.state.year, yearFormat).year();
    }
    console.log(year)
    for (let i = 0; i < data.length; i++) {
      if (this.state.periodo != 0 && this.state.year != "" && data[i].periodo_cod == this.state.periodo && data[i].ano === year) {
        newData.push(data[i])
      }else      if (this.state.periodo != 0 && this.state.year == "" && data[i].periodo_cod == this.state.periodo) {
        newData.push(data[i])
      }else      if (this.state.periodo == 0 && this.state.year != "" && data[i].ano === year) {
        newData.push(data[i])
      }else if (this.state.periodo == 0 && this.state.year == ""){
        newData.push(data[i])
      }
    }
    console.log(newData)
    this.setState({ 'data': newData })
  }

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginLeft: 8 }}>
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
        {/* </div>
            <div> */}
        <Modal
          width={600}
          title="Pesquisa Mapa/PI"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={() => { this.CloseModal() }}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={() => { this.novo() }}>
              Novo
            </Button>,
            <Button key="Pesquisar" type="primary" onClick={() => { this.Consulta() }}>
              Pesquisar
            </Button>,
            <Button key="Editar" type="primary" onClick={() => { this.editar() }}>
              Editar
            </Button>,


          ]}
        >
          <table>
                <tr>
                  <th>
                    Período: <br />
                    <Select
                      showSearch
                      style={{ width: 220 }}
                      placeholder="Período"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={(e) => { this.setState({ "periodo": e }) }}
                    >
                      <Option value="0">Todos</Option>
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
                    Ano: <br />
                    <DatePicker
                      defaultValue={moment(this.state.year, yearFormat)} format={yearFormat} picker="year" 
                      onChange={(e) => { (e != null) ?this.setState({ "year": moment(e).year() }) :this.setState({ "year": "" })}} />
                  </th>
                </tr>
          </table>
          <div>


            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
          </div>




        </Modal>

        {this.state.novo === true &&
          <CadMapaPi callbackModal={(e) => { this.setState(e) }} />
        }

        {this.state.editar === true &&
          <CadMapaPi funcionario={this.state.selectedRowKeys[0]} callbackModal={(e) => { this.setState(e) }} />
        }

      </div>

    );
  }
}

export default PesquisaMapaPI;


