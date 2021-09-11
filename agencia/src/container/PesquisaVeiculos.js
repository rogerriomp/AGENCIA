import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker, Table } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import CadFuncionario from './Cadastro_Funcionario'
import { getKeyThenIncreaseKey } from 'antd/lib/message';

import CadAgencia from './Cadastro_Agencia'
import CadVeiculos from './Cadastro_Veiculos'



const data = [
  {
    key: 1,
    cnpj: "32268484882",
    nome: "rogerio de aquino silva"
  },
  {
    key: 3,
    cnpj: "23432432",
    nome: "rogerio de aquino silva"
  },
  {
    key: 4,
    cnpj: "3243243",
    nome: "rogerio de aquino silva"
  },
  {
    key: 5,
    cnpj: "teste",
    nome: "rogerio de aquino silva"
  },
  {
    key: 6,
    cnpj: "teste",
    nome: "rogerio de aquino silva"
  },
  {
    key: 7,
    cnpj: "teste",
    nome: "rogerio"
  },
  {
    key: 8,
    cnpj: "teste",
    nome: "rogerio"
  }
]

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;

const columns = [

  {
    title: 'Razão Social',
    dataIndex: 'nome',

  },
  {
    title: 'CNPJ',
    dataIndex: 'cnpj',

  },

];

class PesquisaVeiculos extends React.Component {
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
      cod_func: "",
      nome: "",
      data: []

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
    let dados = {
      cep: "",
      rua: "",
      bairro: "",
      cod_cidade: "",
      uf: "",
      complemento: "",
    }
    localStorage.setItem('aba_endereco', JSON.stringify(dados))

    // localStorage.clear();
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
    this.props.closeModal();
  }

  Consulta() {
    if (this.state.nome.length < 3) {
      alert("Para efetuar a busca é necessário digitar pelo menos 3 caracteres")

    } else {
      fetch('/api/consulta_veiculo', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'consulta_veiculo': { 'nome': this.state.nome },
        })
      })
        .then((r) => r.json())
        .then((json) => {
          if (json.veiculos.length > 0) {
            this.setState({ 'data': json.veiculos })
          } else {
            alert("Nenhum resultado retornado")
          }
          // var dados = json.funcionarios.map(person => ({ key:person.id, nome: person.nome, cpf: person.cpf }));
          // this.setState({data:dados})

          // console.log(dados)

        })

    }

  }




  closeCadModal = () => this.setState({ 'novo': false, 'editar': false });



  render() {
    const shouldBeVisible = this.props.visible;
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
          title="Pesquisa Veiculos"
          visible={shouldBeVisible}
          onCancel={(e) => this.CloseModal()}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}>
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
                Nome Veiculo
                <Input
                  placeholder="Nome Veiculo"
                  defaultValue={this.state.nome}
                  onChange={(e) => { this.setState({ 'nome': e.target.value }) }}

                />



              </th>
              <th>

              </th>
              <th>

              </th>
            </tr>
            <tr>
              <th>


              </th>
            </tr>

          </table>
          <div>


            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
          </div>




        </Modal>

        <CadVeiculos visible={this.state.novo || this.state.editar} veiculo={this.state.selectedRowKeys[0]} closeModal={this.closeCadModal} callbackModal={(e) => { this.setState(e) }} />

      </div>

    );
  }
}

export default PesquisaVeiculos;


