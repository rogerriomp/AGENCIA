import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import moment from 'moment';
import AbaEndereco from '../molecule/AbaEndereco'
import AbaContato from '../molecule/Contato'

const dateFormat = 'DD/MM/YYYY';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

class CadastroAgencia extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      select_permission: undefined,
      dt_cadastro: '01/01/2020',

      id: "",
      nome: "",
      cnpj: "",
      tp_pessoa: "1",
      status: 1,
      email: "",
      telefone: "",
      fax: "",
      contato: "",
      fantasia: "",
      nome_red: "",
      cidade_red: "",
      cargo: "",
      clientes: "",
      obs: "",
      insc_est: "",
      cod_cont: "",
      cep: "",
      cod_cidade: "",
      uf: "",
      rua: "",
      bairro: "",
      complemento: "",

    }
    this.convertData = this.convertData.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }

  cadastrar() {


    let dados_cadastro = {
      'id': this.state.id,
      'nome': this.state.nome,
      'cnpj': this.state.cnpj,
      'tp_pessoa': this.state.tp_pessoa,
      'status': this.state.status,
      'email': this.state.email,
      'telefone': this.state.telefone,
      'fax': this.state.fax,
      'contato': this.state.contato,
      'fantasia': this.state.fantasia,
      'obs': this.state.obs,
      'nome_red': this.state.nome_red,
      'cidade_red': this.state.cidade_red,
      'cargo': this.state.cargo,
      'clientes': this.state.clientes,
      'obs': this.state.obs,
      'insc_est': this.state.insc_est,
      'cod_cont': this.state.cod_cont,
      'cep': this.state.cep,
      'cod_cidade': this.state.cod_cidade,
      'estado': this.state.estado,
      'rua': this.state.rua,
      'bairro': this.state.rua,
      'complemento': this.state.complemento,
      'estado': this.state.uf


    }

    console.log("Dados de cadastro: ", dados_cadastro)
    fetch('/api/cadastra_agencia', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'cadastro_agencia': dados_cadastro,
      })
    })
      .then((r) => r.json())
      .then((json) => {

        if ('id_agencia' in json) {
          this.setState({ 'cod_funcionario': json.id_funcionario })
          alert("Funcionário cadastrado com sucesso!")
          this.props.callbackModal({ 'novo': false })
        } if ('msg' in json) {
          alert(json.msg)


          // this.setState({visible:false})
          this.props.callbackModal({ 'editar': false })


        }

        else {
          alert(json)
        }



      })
  }


  convertData(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }

  CloseModal() {

    this.setState({
      visible: false,
    });
  }


  componentDidMount() {

    if (this.props.agencia !== undefined) {
      console.log("cod_agencia: que chegou", this.props.agencia)
      fetch('/api/carregadadosagencia', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'consulta_agencia': this.props.agencia
        })
      })
        .then((r) => r.json())
        .then((json) => {


          if ('resultado' in json) {
            console.log(json.resultado, "Resultado Recebido-------------")

            this.setState({ id: json.resultado.id })
            this.setState({ nome: json.resultado.nome })
            this.setState({ email: json.resultado.email })
            this.setState({ telefone: json.resultado.telefone })
            this.setState({ fax: json.resultado.fax })
            this.setState({ tp_pessoa: json.resultado.tp_pessoa.toString() })
            this.setState({ obs: json.resultado.obs })
            this.setState({ cep: json.resultado.cep })
            this.setState({ fantasia: json.resultado.fantasia })
            this.setState({ contato: json.resultado.contato })
            this.setState({ nome_red: json.resultado.nome_red })
            this.setState({ cargo: json.resultado.cargo })
            this.setState({ clientes: json.resultado.clientes })
            this.setState({ cidade_red: json.resultado.cidade_red })
            this.setState({ uf: json.resultado.estado })

            this.setState({ insc_est: json.resultado.insc_est })
            this.setState({ cnpj: json.resultado.cnpj })
            this.setState({ cod_cont: json.resultado.cod_cont })

            this.setState({ rua: json.resultado.rua })
            this.setState({ bairro: json.resultado.bairro })
            this.setState({ cod_cidade: json.resultado.cod_cidade })
            this.setState({ uf: json.resultado.estado })
            this.setState({ complemento: json.resultado.complemento })

            this.setState({ status: json.resultado.status })

            this.setState({ dt_cadastro: json.resultado.dt_create })




            let dados = {
              id_funcionario: json.resultado.id,
              cep: json.resultado.cep,
              rua: json.resultado.rua,
              bairro: json.resultado.bairro,
              cod_cidade: Number(json.resultado.cod_cidade),
              uf: json.resultado.estado,
              complemento: json.resultado.complemento,
            }
            localStorage.setItem('aba_endereco', JSON.stringify(dados))
            this.setState({ aba_endereco: dados })

            this.setState({ 'visible': true })


          } else {
            alert(json)
          }


        })

    } else {
      this.setState({ botao: "Cadastrar" })
      this.setState({ visible: true })
    }



  }



  render() {
    return (
      <div>
        <Modal
          width={600}
          title="Cadastro de Agências"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
              Cadastrar
            </Button>,
          ]}
        >
          <Tabs onChange={console.log()} type="card">
            <TabPane tab="Dados do Agência" key="1">
              <table>
                <tr>
                  <th>
                    Data de Cadastro:<br />
                    <DatePicker format={dateFormatList}
                      disabled
                      defaultValue={moment(this.state.dt_cadastro, dateFormat)} format={dateFormat}
                    />
                  </th>
                  <th>
                    Tipo Pessoa:<br />
                    <Select
                      labelInValue
                      defaultValue={{ value: this.state.tp_pessoa }}
                      style={{ width: 190 }}
                      onChange={(e) => { this.setState({ 'tp_pessoa': e.value }) }}
                    >
                      <Option value="1">Jurídica</Option>
                      <Option value="2">Física</Option>
                    </Select>
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Nome:</b>
                    <Input
                      defaultValue={this.state.nome}
                      onChange={(e) => { this.setState({ "nome": e.target.value }) }}
                      placeholder="Nome" />
                  </th>
                  <th>
                    <b>Fantasia:</b>
                    <Input
                      defaultValue={this.state.fantasia}
                      onChange={(e) => { this.setState({ "fantasia": e.target.value }) }}
                      placeholder="Fantasia" />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>E-mail:</b>
                    <Input
                      defaultValue={this.state.email}
                      onChange={(e) => { this.setState({ "email": e.target.value }) }}
                      placeholder="E-mail" />
                  </th>
                  <th>
                    <b>Telefone:</b>
                    <Input
                      placeholder="Telefone"
                      defaultValue={this.state.telefone}
                      onChange={e => this.setState({ telefone: formatToPhone(e.target.value) })} />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Fax</b>
                    <Input
                      placeholder="Fax"
                      defaultValue={this.state.fax}
                      onChange={e => this.setState({ fax: formatToPhone(e.target.value) })} />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Contato:</b>
                    <Input
                      defaultValue={this.state.contato}
                      onChange={(e) => { this.setState({ "contato": e.target.value }) }}
                      placeholder="Contato" />
                  </th>
                  <th>
                    <b>Nome Red.:</b>
                    <Input
                      defaultValue={this.state.nome_red}
                      onChange={(e) => { this.setState({ "nome_red": e.target.value }) }}
                      placeholder="Nome Red." />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Cidade Red.:</b>
                    <Input
                      defaultValue={this.state.cidade_red}
                      onChange={(e) => { this.setState({ "cidade_red": e.target.value }) }}
                      placeholder="Cidade Red." />
                  </th>
                  <th>
                    <b>Cargo:</b>
                    <Input
                      defaultValue={this.state.cargo}
                      onChange={(e) => { this.setState({ "cargo": e.target.value }) }}
                      placeholder="Cargo" />
                  </th>
                </tr>

                <tr>
                  <th colSpan="2">
                    <b>Clientes:</b>
                    <Input
                      defaultValue={this.state.clientes}
                      onChange={(e) => { this.setState({ "clientes": e.target.value }) }}
                      placeholder="Contato" />
                  </th>
                </tr>

                <b>Observação:</b>
                <tr>
                  <th colspan="2">
                    <TextArea
                      defaultValue={this.state.obs}
                      onChange={(e) => { this.setState({ "obs": e.target.value }) }}
                      rows={4} />
                  </th>
                </tr>


              </table>
            </TabPane>
            <TabPane tab="Documentos" key="4">
              <table>
                <tr>
                  <th>
                    Inscr. Est.:
                    <Input
                      defaultValue={this.state.insc_est}
                      onChange={(e) => { this.setState({ "insc_est": e.target.value }) }}
                      placeholder="Inscr. Est." />
                  </th>
                  <th>
                    CNPJ:
                    <Input
                      defaultValue={this.state.cnpj}
                      onChange={(e) => { this.setState({ "cnpj": e.target.value }) }}
                      placeholder="CNPJ" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Cod. Contab.:
                    <Input
                      defaultValue={this.state.cod_cont}
                      onChange={(e) => { this.setState({ "cod_cont": e.target.value }) }}
                      placeholder="Cod. Contab." />
                  </th>
                </tr>

              </table>
            </TabPane>
            <TabPane tab="Endereço" key="3">
              {/* <AbaEndereco callbackFunction={(e)=>this.setState(e)}/> */}
              <AbaEndereco dados={this.state.aba_endereco} callbackFunction={(e) => this.setState(e)} />

            </TabPane>

            <TabPane tab="Contato" Key='4'>
              <AbaContato />
            </TabPane>



          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default CadastroAgencia;


