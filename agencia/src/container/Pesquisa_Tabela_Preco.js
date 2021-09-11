import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker, Table } from 'antd';
import { Input } from 'antd';
import moment from 'moment';
import TabelaPreco from './Tabela_Preco'

const dateFormat = 'DD/MM/YYYY';
const dateFormatEn = 'YYYY-MM-DD';
const dateFormatMonth = 'MM/YYYY';
const { Option } = Select;

const columns = [
  {
    title: 'Data Inicial',
    dataIndex: 'dt_inicio',
    render: ((date) => getFullDate(date)),
  },
  {
    title: 'Data Final',
    dataIndex: 'dt_fim',
    render: ((date) => getFullDate(date)),
  },
  {
    title: 'Tipo Veículo',
    dataIndex: 'tp_veiculo',
    render: ((date) => getTpVeiculo(date)),
  },
];

function getTpVeiculo(e) {
  if (e === "1") {
    return "Rádio"
  }
  if (e === "2") {
    return "Jornal"
  }
  if (e === "3") {
    return "Outros"
  }
}
function getFullDate(e) {
  return moment(e).format(dateFormat)
}
class PesqTabPreco extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      select_permission: undefined,
      cadastrar_tabela: false,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      dt_inicio: new Date(),
      dt_fim: new Date(),
      tp_veiculo: "1",
      data: [],
    }
    this.Update = this.Update.bind(this)
    this.start = this.start.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
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

  Consulta() {
    let newData = []
    let dt_inicio = this.state.dt_inicio
    let dt_fim = this.state.dt_fim
    let momentInicio, momentFim

    if (dt_inicio != "") {
      momentInicio = moment(this.state.dt_inicio, dateFormatMonth).startOf('month')
      dt_inicio = momentInicio.format(dateFormatEn);
    } else {
      alert("Para efetuar a busca é necessário selecionar uma data de início")
    }
    if (dt_fim != "") {
      momentFim = moment(this.state.dt_fim, dateFormatMonth).endOf('month')
      dt_fim = momentFim.format(dateFormatEn);
    } else {
      alert("Para efetuar a busca é necessário selecionar uma data final")
    }

    if (momentInicio.isAfter(momentFim)) {
      alert("Para efetuar a busca é necessário que a data inicial seja anterior a data final")
    }

    let url = '/api/consultatbpreco/' + dt_inicio + "/" + dt_fim + "/" + this.state.tp_veiculo

    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((r) => r.json())
      .then((json) => {
        this.setState({ 'data': json.resultado })
        console.log(this.state.data)
      })
    this.setState({ 'data': newData })
  }

  CloseModal() {
    this.props.closeModal();
  }

  render() {
    const shouldBeVisible = this.props.visible;
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
          visible={shouldBeVisible}
          onCancel={(e) => this.CloseModal()}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={() => this.Update({ 'cadastrar_tabela': true })}>
              Novo
            </Button>,
            <Button key="Pesquisar" type="primary" onClick={() => { this.Consulta() }}>
              Pesquisar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={console.log()}>
              Atualizar Tabela
            </Button>,
          ]}
        >
          <div>
            <table>
              <tr>
                <th>
                  Data Inicial: <br />
                  <DatePicker
                    defaultValue={moment(this.state.dt_inicio, dateFormatMonth)} format={dateFormatMonth} picker="dt_inicio"
                    onChange={(e) => { (e != null) ? this.setState({ "dt_inicio": moment(e) }) : this.setState({ "dt_inicio": "" }) }} />
                </th>
                <th>
                  Data Final: <br />
                  <DatePicker
                    defaultValue={moment(this.state.dt_fim, dateFormatMonth)} format={dateFormatMonth} picker="dt_fim"
                    onChange={(e) => { (e != null) ? this.setState({ "dt_fim": moment(e) }) : this.setState({ "dt_fim": "" }) }} />
                </th>
                <th>

                  Tipo Veículo: <br />
                  <Select
                    labelInValue
                    defaultValue={{ value: this.state.tp_veiculo }}
                    style={{ width: 190 }}
                    onChange={(e) => { this.setState({ 'tp_veiculo': e.value }) }}
                  >
                    <Option value="1">Rádio</Option>
                    <Option value="2">Jornal</Option>
                    <Option value="3">Outros</Option>
                  </Select>
                </th>
              </tr>
            </table>
            <div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ marginLeft: 8 }}>
                  {hasSelected ? `Selected ${this.state.selectedRowKeys.length} items` : ''}
                </span>
              </div>
              <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data}
                rowKey={row => row.id} />
            </div>
          </div>



        </Modal>
        {this.state.cadastrar_tabela === true &&
          <TabelaPreco callback={(e) => this.setState(e)} />
        }

      </div>
    );
  }
}

export default PesqTabPreco;


