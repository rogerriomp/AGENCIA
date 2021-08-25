import React from 'react';
import { Modal, Button, Select, Tabs, DatePicker, Table } from 'antd';
import CadMapaPi from './Cadastro_MapaPI'
import moment from 'moment';


const dateFormat = 'DD/MM/YYYY';
const dateFormatEn = 'YYYY-MM-DD';
const { Option } = Select;

const columns = [
  {
    title: 'Número da Agência',
    dataIndex: ['cadastro_mapa','numero_agencia'],
  },
  {
    title: 'Emissão',
    dataIndex: ['cadastro_mapa','dt_emissao'],
    render: ((date) => getFullDate(date)),
  },
  {
    title: 'Período',
    dataIndex: ['cadastro_mapa','periodo'],
    render: ((date) => getPeriodo(date)),
  },
  {
    title: 'Ano',
    dataIndex: ['cadastro_mapa','ano'],
  },
];

function getPeriodo(e){
  if (e === "1") {
    return "Janeiro"
  }
  if (e === "2") {
    return "Fevereiro"
  }
  if (e === "3") {
    return "Março"
  }
  if (e === "4") {
    return "Abril"
  }
  if (e === "5") {
    return "Maio"
  }
  if (e === "6") {
    return "Junho"
  }
  if (e === "7") {
    return "Julho"
  }
  if (e === "8") {
    return "Agosto"
  }
  if (e === "9") {
    return "Setembro"
  }
  if (e === "10") {
    return "Outubro"
  }
  if (e === "11") {
    return "Novembro"
  }
  if (e === "12") {
    return "Dezembro"
  }
}
function getFullDate(e){
  return moment(e).format(dateFormat)
}
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
      dt_inicio: new Date(),
      dt_fim: new Date(),

    }
    this.Update = this.Update.bind(this)
    this.start = this.start.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.novo = this.novo.bind(this)
    this.editar = this.editar.bind(this)

  }
  Update(e) {
    this.setState(e)
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
    let dt_inicio = this.state.dt_inicio
    let dt_fim = this.state.dt_fim
    let momentInicio, momentFim

    if (dt_inicio != ""){
      momentInicio = moment(this.state.dt_inicio, dateFormat)
      dt_inicio = momentInicio.format(dateFormatEn);
    }else{
      alert("Para efetuar a busca é necessário selecionar uma data de início")
    }
    if (dt_fim != ""){
      momentFim = moment(this.state.dt_fim, dateFormat)
      dt_fim = momentFim.format(dateFormatEn);
    }else{
      alert("Para efetuar a busca é necessário selecionar uma data final")
    }
    if (momentInicio.isAfter(momentFim)){
      alert("Para efetuar a busca é necessário que a data inicial seja anterior a data final")
    }
    
    let url = '/api/consultamapapi/'+dt_inicio+"/"+dt_fim

    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((r) => r.json())
      .then((json) => {
        this.setState({'data':json.resultado})
        console.log(this.state.data)
      })
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
          onCancel={(e)=>this.CloseModal()}
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
                    Data de Emissão de: <br />
                    <DatePicker
                      defaultValue={moment(this.state.dt_inicio, dateFormat)} format={dateFormat} picker="dt_inicio" 
                      onChange={(e) => { (e != null) ?this.setState({ "dt_inicio": moment(e) }) :this.setState({ "dt_inicio": "" })}} />
                  </th>
                  <th>
                    Até: <br />
                    <DatePicker
                      defaultValue={moment(this.state.dt_fim, dateFormat)} format={dateFormat} picker="dt_fim" 
                      onChange={(e) => { (e != null) ?this.setState({ "dt_fim": moment(e) }) :this.setState({ "dt_fim": "" })}} />
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
          <CadMapaPi mapapi={this.state.selectedRowKeys[0]} callbackModal={(e) => { this.setState(e) }} />
        }

      </div>

    );
  }
}

export default PesquisaMapaPI;


