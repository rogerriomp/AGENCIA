import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import AbaEndereco from '../molecule/AbaEndereco'
import HistFunc from '/Users/gucarvalho/go/src/github.com/aquino/AGENCIA/agencia/src/container/Historico'
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

const { TextArea } = Input;
const { Option } = Select;
const { TabPane } = Tabs;
class CadFuncionario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      select_permission: undefined,
      nascimento: '05/09/1964',
      admissao: '05/09/1964',
      desligamento: '05/09/1964',
      cod_funcionario: undefined,

      id: "",
      nome: "",
      funcao: "",
      email: "",
      telefone: "",
      tp_acesso: "",
      observacao: "",
      cep: "",
      rua: "",
      bairro: "",
      cod_cidade: "",
      uf: "",
      complemento: "",
      rg: "",
      cpf: "",
      ctps: "",
      reservista: "",
      titulo: "",
      dt_nascimento: "",
      dt_admissao: "",
      dt_desligamento: "",
      status: "",
      genero: "",
      banco: "",
      agencia: "",
      conta: "",
      tp_conta: "",
      historico: "",
      botao: "Editar",


      aba_endereco: {},
      lista_tp_acessos: [{ value: 1, label: "Total" }, { value: 2, label: "Comercial" }, { value: 3, label: "Cadastro e Relatórios" }],
      lista_genero: [{ value: 1, label: "Masculino" }, { value: 2, label: "Feminino" }],
      lista_status: [{ value: 1, label: "Ativo" }, { value: 2, label: "Inativo" }]


    }
    this.handlechangeCPF = this.handlechangeCPF.bind(this)
    this.convertData = this.convertData.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
    this.GeraSenha = this.GeraSenha.bind(this)
  }
  componentDidMount() {

    if (this.props.funcionario !== undefined) {
      console.log("cod_funcionario: que chegou", this.props.funcionario)
      fetch('/api/carregadadosfuncionario', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'consulta_funcionario': this.props.funcionario
        })
      })
        .then((r) => r.json())
        .then((json) => {


          if ('resultado' in json) {
            // console.log(json.resultado)

            this.setState({ id: json.resultado.id })
            this.setState({ nome: json.resultado.nome })
            this.setState({ funcao: json.resultado.funcao })
            this.setState({ email: json.resultado.email })
            this.setState({ telefone: json.resultado.telefone })
            this.setState({ tp_acesso: json.resultado.tp_acesso })
            this.setState({ observacao: json.resultado.obs })
            this.setState({ cep: json.resultado.cep })
            this.setState({ rua: json.resultado.rua })
            this.setState({ bairro: json.resultado.bairro })
            this.setState({ cod_cidade: json.resultado.cod_cidade })
            this.setState({ uf: json.resultado.estado })
            this.setState({ complemento: json.resultado.complemento })
            this.setState({ rg: json.resultado.rg })
            this.setState({ cpf: json.resultado.cpf })
            this.setState({ ctps: json.resultado.ctps })
            this.setState({ reservista: json.resultado.reservista })
            this.setState({ titulo: json.resultado.titulo })
            this.setState({ dt_nascimento: json.resultado.dt_nascimento })
            this.setState({ dt_admissao: json.resultado.dt_admissao })
            this.setState({ dt_desligamento: json.resultado.dt_desligamento })
            this.setState({ status: json.resultado.status })
            this.setState({ genero: json.resultado.genero })
            this.setState({ banco: json.resultado.banco })
            this.setState({ agencia: json.resultado.agencia })
            this.setState({ conta: json.resultado.conta })
            this.setState({ tp_conta: json.resultado.tp_conta })



            let dados = {
              id_funcionario: json.resultado.id,
              cep: json.resultado.cep,
              rua: json.resultado.rua,
              bairro: json.resultado.bairro,
              cod_cidade: json.resultado.cod_cidade,
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





  CloseModal() {
    this.setState({ 'visible': false })
    this.props.callbackModal({ 'editar': false })
    this.props.callbackModal({ 'novo': false })
  }


  setVisible() {
    this.setState({ visible: false })
  }
  handlechangeCPF(e) {
    this.setState({ cpf: formatToCPF(e.target.value) })
  }
  convertData(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, mnth, date.getFullYear()].join("/");
  }
  cadastrar() {


    let dados_cadastro = {
      'id': this.state.id,
      'nome': this.state.nome,
      'cpf': this.state.cpf,
      'rg': this.state.rg,
      'tp_acesso': this.state.tp_acesso,
      'status': this.state.status,
      'email': this.state.email,
      'telefone': this.state.telefone,
      'obs': this.state.observacao,
      'funcao': this.state.funcao,
      'ctps': this.state.ctps,
      'reservista': this.state.reservista,
      'titulo': this.state.titulo,
      'dt_nascimento': this.state.dt_nascimento,
      'dt_admissao': this.state.dt_admissao,
      'dt_desligamento': this.state.desligamento,
      'genero': this.state.genero,
      'cep': this.state.cep,
      'cod_cidade': this.state.cod_cidade,
      'estado': this.state.uf,
      'rua': this.state.rua,
      'bairro': this.state.rua,
      'complemento': this.state.complemento,
      'banco': this.state.banco,
      'agencia': this.state.agencia,
      'conta': this.state.conta,
      'tp_conta': this.state.tp_conta
    }


    fetch('/api/cadastra_funcionario', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'cadastro_funcionario': dados_cadastro,
      })
    })
      .then((r) => r.json())
      .then((json) => {

        if ('id_funcionario' in json) {
          this.setState({ 'cod_funcionario': json.id_funcionario })
          alert("Funcionário cadastrado com sucesso! \n * Para criar a senha de acesso click gerar senha na tela de cadastro")
        } if ('msg' in json) {
          alert(json.msg)
        }

        else {
          alert(json)
        }



      })
  }

  GeraSenha() {

    fetch('/api/cria_senha', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'cria_senha': this.state.id,
      })
    })
      .then((r) => r.json())
      .then((json) => {

        if ('resultado' in json) {
          this.setState({ 'id': json.resultado.id_funcionario })
          alert(json.resultado)
        } else {
          alert(json)
        }



      })

  }








  render() {
    return (
      <div>
        <Modal
          width={700}
          title="Cadastro de Funcionários"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
              {this.state.botao}
            </Button>,
          ]}
        >
          <Tabs onChange={console.log()} type="card">
            <TabPane tab="Dados do Funcionário" key="1">
              <table>
                <tr>
                  <th>
                    <b>Nome:</b>
                    <Input
                      placeholder="Nome"
                      defaultValue={this.state.nome}
                      onChange={(e) => { this.setState({ "nome": e.target.value }) }}
                    />
                  </th>
                  <th>
                    <b>Função:</b>
                    <Input
                      placeholder="Função"
                      defaultValue={this.state.funcao}
                      onChange={(e) => { this.setState({ "funcao": e.target.value }) }}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>E-mail:</b>
                    <Input
                      placeholder="E-mail"
                      defaultValue={this.state.email}
                      onChange={(e) => { this.setState({ "email": e.target.value }) }}
                    />
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
                    Permissão:<br />
                    <Select
                      labelInValue
                      defaultValue={{ value: this.state.tp_acesso }}
                      style={{ width: 190 }}
                      onChange={(e) => { this.setState({ 'tp_acesso': e.value }) }}
                    >
                      {/* <Option value="1">Total</Option>
    <Option value="2">Comercial</Option>
    <Option value="3">Cadastro e Relatórios</Option> */}


                      {this.state.lista_tp_acessos.map(x => <Option value={x.value}>{x.label}</Option>)}

                    </Select>
                  </th>
                  {this.state.id !== "" &&

                    <th>
                      <br />

                      <Button key="back" onClick={() => { this.GeraSenha() }}>
                        Gerar Senha
                      </Button>
                    </th>}
                </tr>
                <br />
                <b>Observação:</b>
                <tr>
                  <th colspan="2">
                    <TextArea
                      rows={4}
                      defaultValue={this.state.observacao}
                      onChange={(e) => { this.setState({ "observacao": e.target.value }) }}
                    />
                  </th>
                </tr>
              </table>
            </TabPane>
            <TabPane tab="Endereço" key="2">

              <AbaEndereco dados={this.state.aba_endereco} callbackFunction={(e) => this.setState(e)} />

            </TabPane>
            <TabPane tab="Documentos" key="3">
              <table>
                <tr>
                  <th>
                    RG:
                    <Input
                      placeholder="RG"
                      defaultValue={this.state.rg}
                      onChange={(e) => { this.setState({ "rg": e.target.value }) }}
                    />
                  </th>
                  <th>
                    CPF:
                    <Input
                      placeholder="CPF"
                      maxLength='14'
                      defaultValue={this.state.cpf}
                      onChange={(e) => { this.setState({ "cpf": e.target.value }) }}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    CTPS:
                    <Input
                      placeholder="CTPS"
                      defaultValue={this.state.ctps}
                      onChange={(e) => { this.setState({ "ctps": e.target.value }) }}
                    />
                  </th>
                  <th>
                    Reservista:
                    <Input
                      placeholder="Reservista"
                      defaultValue={this.state.reservista}
                      onChange={(e) => { this.setState({ "reservista": e.target.value }) }}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    Titulo de Eleitor:
                    <Input
                      placeholder="Titulo de Eleitor"
                      defaultValue={this.state.titulo}
                      onChange={(e) => { this.setState({ "titulo": e.target.value }) }}
                    />
                  </th>
                </tr>
              </table>
              <table>
                <tr>

                  <th>
                    Data de Nascimento:<br />
                    <DatePicker format={dateFormatList}
                      defaultValue={moment(this.state.dt_nascimento, dateFormatList[0])} format={dateFormatList}
                      onChange={(e) => { if (e !== null) { this.setState({ 'dt_nascimento': this.convertData(e._d) }) } }} />
                  </th>

                  <th>
                    Data Admissão:<br />
                    <DatePicker format={dateFormatList}
                      defaultValue={moment(this.state.dt_admissao, dateFormatList[0])} format={dateFormatList}
                      onChange={(e) => { if (e !== null) { this.setState({ 'dt_admissao': this.convertData(e._d) }) } }} />
                  </th>
                  <th>
                    Data Desligamento:<br />
                    <DatePicker format={dateFormatList}
                      defaultValue={moment(this.state.dt_desligamento, dateFormatList[0])} format={dateFormatList}
                      onChange={(e) => { if (e !== null) { this.setState({ 'dt_desligamento': this.convertData(e._d) }) } }} />
                  </th>
                </tr>
                <tr>
                  <th>
                    Status:<br />
                    <Select
                      labelInValue
                      defaultValue={{ value: this.state.status }}
                      style={{ width: 190 }}
                      onChange={(e) => { this.setState({ 'status': e }) }}
                    >
                      {this.state.lista_status.map(x => <Option value={x.value}>{x.label}</Option>)}
                    </Select>
                  </th>

                  <th>
                    Genero:<br />
                    <Select
                      labelInValue
                      defaultValue={{ value: this.state.genero }}
                      style={{ width: 190 }}
                      onChange={(e) => { this.setState({ 'genero': e.value }) }}
                    >
                      {this.state.lista_genero.map(x => <Option value={x.value}>{x.label}</Option>)}


                    </Select>
                  </th>


                </tr>


              </table>

            </TabPane>

            <TabPane tab="Dados Bancarios" key="4">
              <table>
                <tr>
                  <th>
                    Banco:
                    <Input
                      placeholder="Banco"
                      defaultValue={this.state.banco}
                      onChange={(e) => { this.setState({ "banco": e.target.value }) }}
                    />
                  </th>
                  <th>
                    Agência:
                    <Input
                      placeholder="Agência"
                      defaultValue={this.state.agencia}
                      onChange={(e) => { this.setState({ "agencia": e.target.value }) }}
                    />
                  </th>
                </tr>
                <tr>
                  <th>
                    Conta:
                    <Input
                      placeholder="Conta"
                      defaultValue={this.state.conta}
                      onChange={(e) => { this.setState({ "conta": e.target.value }) }}
                    />
                  </th>
                  <th>
                    Tipo Conta:
                    <Input
                      placeholder="Tipo Conta"
                      defaultValue={this.state.tp_conta}
                      onChange={(e) => { this.setState({ "tp_conta": e.target.value }) }}
                    />
                  </th>
                </tr>

              </table>
            </TabPane>


            {/* <TabPane tab="Histórico" key="5">

                <HistFunc/>

              </TabPane> */}

          </Tabs>
        </Modal>

      </div>
    );
  }
}

export default CadFuncionario;


