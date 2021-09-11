import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import AbaEndereco from '../molecule/AbaEndereco'
import HistFunc from '/Users/gucarvalho/go/src/github.com/aquino/AGENCIA/agencia/src/container/Historico'
import moment from 'moment';
const dateFormat = 'DD/MM/YYYY';
const dateFormatBackend = 'YYYY-MM-DD';

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
      dt_nascimento: new Date(),
      dt_admissao: new Date(),
      dt_desligamento: new Date(),
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
    if (this.props.funcionario !== undefined) {this.setState({ id: this.props.funcionario.id })
    this.setState({ nome: this.props.funcionario.nome })
    this.setState({ funcao: this.props.funcionario.funcao })
    this.setState({ email: this.props.funcionario.email })
    this.setState({ telefone: this.props.funcionario.telefone })
    this.setState({ tp_acesso: this.props.funcionario.tp_acesso })
    this.setState({ observacao: this.props.funcionario.obs })
    this.setState({ cep: this.props.funcionario.cep })
    this.setState({ rua: this.props.funcionario.rua })
    this.setState({ bairro: this.props.funcionario.bairro })
    this.setState({ cod_cidade: this.props.funcionario.cod_cidade })
    this.setState({ uf: this.props.funcionario.estado })
    this.setState({ complemento: this.props.funcionario.complemento })
    this.setState({ rg: this.props.funcionario.rg })
    this.setState({ cpf: this.props.funcionario.cpf })
    this.setState({ ctps: this.props.funcionario.ctps })
    this.setState({ reservista: this.props.funcionario.reservista })
    this.setState({ titulo: this.props.funcionario.titulo })
    this.setState({ dt_nascimento: (this.props.funcionario.dt_nascimento!== "")?moment(this.props.funcionario.dt_nascimento):"" })
    this.setState({ dt_admissao: (this.props.funcionario.dt_admissao!== "")?moment(this.props.funcionario.dt_admissao):"" })
    this.setState({ dt_desligamento: (this.props.funcionario.dt_desligamento!== "")?moment(this.props.funcionario.dt_desligamento):"" })
    this.setState({ status: this.props.funcionario.status })
    this.setState({ genero: this.props.funcionario.genero })
    this.setState({ banco: this.props.funcionario.banco })
    this.setState({ agencia: this.props.funcionario.agencia })
    this.setState({ conta: this.props.funcionario.conta })
    this.setState({ tp_conta: this.props.funcionario.tp_conta })

    let dados = {
      id_funcionario: this.props.funcionario.id,
      cep: this.props.funcionario.cep,
      rua: this.props.funcionario.rua,
      bairro: this.props.funcionario.bairro,
      cod_cidade: this.props.funcionario.cod_cidade,
      uf: this.props.funcionario.estado,
      complemento: this.props.funcionario.complemento,
    }
    localStorage.setItem('aba_endereco', JSON.stringify(dados))
    this.setState({ aba_endereco: dados })
    this.setState({ botao: "Editar" })
    }else{
      this.setState({ botao: "Cadastrar" })
    }
  }
  mount() {
    if (this.props.funcionario !== undefined) {
            this.state.id=this.props.funcionario.id
            this.state.nome=this.props.funcionario.nome
            this.state.funcao=this.props.funcionario.funcao
            this.state.email=this.props.funcionario.email
            this.state.telefone=this.props.funcionario.telefone
            this.state.tp_acesso=this.props.funcionario.tp_acesso
            this.state.observacao=this.props.funcionario.obs
            this.state.cep=this.props.funcionario.cep
            this.state.rua=this.props.funcionario.rua
            this.state.bairro=this.props.funcionario.bairro
            this.state.cod_cidade=this.props.funcionario.cod_cidade
            this.state.uf=this.props.funcionario.estado
            this.state.complemento=this.props.funcionario.complemento
            this.state.rg=this.props.funcionario.rg
            this.state.cpf=this.props.funcionario.cpf
            this.state.ctps=this.props.funcionario.ctps
            this.state.reservista=this.props.funcionario.reservista
            this.state.titulo=this.props.funcionario.titulo
            this.state.dt_nascimento=(this.props.funcionario.dt_nascimento!== "")?moment(this.props.funcionario.dt_nascimento):""
            this.state.dt_admissao=(this.props.funcionario.dt_admissao!== "")?moment(this.props.funcionario.dt_admissao):""
            this.state.dt_desligamento=(this.props.funcionario.dt_desligamento!== "")?moment(this.props.funcionario.dt_desligamento):""
            this.state.status=this.props.funcionario.status
            this.state.genero=this.props.funcionario.genero
            this.state.banco=this.props.funcionario.banco
            this.state.agencia=this.props.funcionario.agencia
            this.state.conta=this.props.funcionario.conta
            this.state.tp_conta=this.props.funcionario.tp_conta

            let dados = {
              id_funcionario: this.props.funcionario.id,
              cep: this.props.funcionario.cep,
              rua: this.props.funcionario.rua,
              bairro: this.props.funcionario.bairro,
              cod_cidade: this.props.funcionario.cod_cidade,
              uf: this.props.funcionario.estado,
              complemento: this.props.funcionario.complemento,
            }
            localStorage.setItem('aba_endereco', JSON.stringify(dados))
            this.state.aba_endereco=dados

            this.state.botao="Editar"
    } else {
      this.state.id=""
      this.state.nome=""
      this.state.funcao=""
      this.state.email=""
      this.state.telefone=""
      this.state.tp_acesso=""
      this.state.observacao=""
      this.state.cep=""
      this.state.rua=""
      this.state.bairro=""
      this.state.cod_cidade=""
      this.state.uf=""
      this.state.complemento=""
      this.state.rg=""
      this.state.cpf=""
      this.state.ctps=""
      this.state.reservista=""
      this.state.titulo=""
      this.state.dt_nascimento=new Date()
      this.state.dt_admissao=new Date()
      this.state.dt_desligamento=new Date()
      this.state.status=""
      this.state.genero=""
      this.state.banco=""
      this.state.agencia=""
      this.state.conta=""
      this.state.tp_conta=""
      this.state.aba_endereco={}
      this.state.botao="Cadastrar"
    }
  }





  CloseModal() {
    this.props.closeModal();
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
      'status': this.state.status.value,
      'email': this.state.email,
      'telefone': this.state.telefone,
      'obs': this.state.observacao,
      'funcao': this.state.funcao,
      'ctps': this.state.ctps,
      'reservista': this.state.reservista,
      'titulo': this.state.titulo,
      'dt_nascimento': moment(this.state.dt_nascimento).format(dateFormatBackend),
      'dt_admissao': moment(this.state.dt_admissao).format(dateFormatBackend),
      'dt_desligamento': this.state.dt_desligamento != "" ? moment(this.state.dt_desligamento).format(dateFormatBackend): "",
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
          this.setState({ 'id': this.props.funcionario.id_funcionario })
          alert(this.props.funcionario)
        } else {
          alert(json)
        }



      })

  }








  render() {
    const shouldBeVisible = this.props.visible;
    if(this.props.visible){
      this.mount()
    }
    return (
      <div>
        <Modal
          width={700}
          title="Cadastro de Funcionários"
          visible={shouldBeVisible}
          onCancel={(e) => this.CloseModal()}
          footer={[
            <Button key="back" onClick={(e) => this.CloseModal()}>
              Cancelar
            </Button>,
            <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
              {this.state.botao}
            </Button>,
          ]}
        >
          <Tabs  type="card">
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
                    <DatePicker defaultValue={moment(this.state.dt_nascimento, dateFormat)} format={dateFormat}
                      onChange={(e) => { (e != null) ? this.setState({ "dt_nascimento": moment(e) }) : this.setState({ "dt_nascimento": "" }) }} />
                  </th>

                  <th>
                    Data Admissão:<br />
                    <DatePicker defaultValue={moment(this.state.dt_admissao, dateFormat)} format={dateFormat}
                      onChange={(e) => { (e != null) ? this.setState({ "dt_admissao": moment(e) }) : this.setState({ "dt_admissao": "" }) }} />
                  </th>
                  <th>
                    Data Desligamento:<br />
                    <DatePicker defaultValue={moment(this.state.dt_desligamento, dateFormat)} format={dateFormat}
                      onChange={(e) => { (e != null) ? this.setState({ "dt_desligamento": moment(e) }) : this.setState({ "dt_desligamento": "" }) }} />
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
          </Tabs>
        </Modal>

      </div>
    );
  }
}

export default CadFuncionario;


