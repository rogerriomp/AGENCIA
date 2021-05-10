
import React, { Component, Image, PropTypes } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';
import moment from 'moment';
import AbaEndereco from '../molecule/AbaEndereco'

const dateFormat = 'DD/MM/YYYY';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;



class CadVeiculos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        visible: false,
        select_permission: undefined,
        dt_cadastro: '01/01/2020',


        id: '',
        rz_social: '',
        fantasia: '',
        cnpj:'', 
        agencia_select:0, 
        tp_pessoa:'', 
        tp_veiculo:'',
        email :'',
        classificacao:'', 
        telefone:'',
        obs:'', 
        whatsapp:'', 
        contato:'', 
        cep:'', 
        rua:'', 
        bairro:'', 
        uf:'',
        cod_cidade:'', 
        estado:'',
        complemento:'', 
        banco:'', 
        agencia:'', 
        conta:'', 
        tp_conta:'', 
        historico:'', 
        insc_est:'', 
        cod_cont:'', 
        nome_red:'', 
        cidade_red:'', 
        ativo_tabela_preco:'', 
        preco_15:'', 
        preco_30:'', 
        preco_60:'',

        aba_endereco:"",

    }
    this.convertData = this.convertData.bind(this)
    this.callbackFunction = this.callbackFunction.bind(this)
    this.cadastrar = this.cadastrar.bind(this)
  }
  cadastrar(){

    
    let dados_cadastro = {
      id: this.state.id,
      rz_social: this.state.rz_social,
      fantasia: this.state.fantasia,
      cnpj:this.state.cnpj, 
      agencia_select:this.state.agencia_select, 
      tp_pessoa:this.state.tp_pessoa, 
      tp_veiculo:this.state.tp_veiculo,
      email :this.state.email,
      classificacao:this.state.classificacao, 
      telefone:this.state.telefone,
      observacao:this.state.obs, 
      whatsapp:this.state.whatsapp, 
      contato:this.state.contato, 
      cep:this.state.cep, 
      rua:this.state.rua, 
      bairro:this.state.bairro, 
      cod_cidade:this.state.cod_cidade, 
      estado:this.state.uf,
      complemento:this.state.complemento, 
      banco:this.state.banco, 
      agencia:this.state.agencia, 
      conta:this.state.conta, 
      tp_conta:this.state.tp_conta, 
      historico:this.state.historico, 
      insc_est:this.state.insc_est, 
      cod_cont:this.state.cod_cont, 
      nome_red:this.state.nome_red, 
      cidade_red:this.state.cidade_red, 
      ativo_tabela_preco:this.state.ativo_tabela_preco, 
      preco_15:this.state.preco_15, 
      preco_30:this.state.preco_30, 
      preco_60:this.state.preco_60,
      
    }
  
console.log("Dados de cadastro: ", dados_cadastro)  
    fetch('/api/cadastra_veiculo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'cadastro_veiculo': dados_cadastro,
      })
    })
      .then((r) => r.json())
      .then((json) => {
  
  if('id_agencia' in json){
    this.setState({'cod_funcionario':json.id_funcionario})
    alert("Funcionário cadastrado com sucesso!")
    this.props.callbackModal({'novo':false})
  }if('msg' in json){
    alert(json.msg)
    
    
    // this.setState({visible:false})
    this.props.callbackModal({'editar':false})
    
    
  }
  
  else{
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

  callbackFunction(e) {

    this.setState(e)
    console.log('Funcionou', this.state)
  }

  CloseModal(){

    this.setState({
      visible: false,
    });
  } 



  componentDidMount(){
  
    if (this.props.veiculo !== undefined){
  console.log("cod_veiculo: que chegou", this.props.veiculo)
  fetch('/api/carregadadosveiculo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'consulta_veiculo':this.props.veiculo
    })
  })
    .then((r) => r.json())
    .then((json) => {
  
  
  if('resultado' in json){
  console.log(json.resultado, "Resultado Recebido-------------")
  
  this.setState({id: json.resultado.id})
  this.setState({rz_social: json.resultado.rz_social})
  this.setState({fantasia: json.resultado.fantasia})
  this.setState({email: json.resultado.email})
  this.setState({telefone: json.resultado.telefone})
  this.setState({whatsapp: json.resultado.whatsapp})
  
  this.setState({tp_pessoa: json.resultado.tp_pessoa})
  this.setState({tp_veiculo: json.resultado.tp_veiculo})
  this.setState({obs: json.resultado.obs})
  this.setState({cep: json.resultado.cep})
  this.setState({tp_veiculo: json.resultado.tp_veiculo})
  
  this.setState({contato: json.resultado.contato})
  this.setState({nome_red: json.resultado.nome_red})
  this.setState({cargo: json.resultado.cargo})
  this.setState({clientes: json.resultado.clientes})
  this.setState({cidade_red: json.resultado.cidade_red})
  this.setState({uf: json.resultado.estado})
  
  this.setState({insc_est: json.resultado.insc_est})
  this.setState({cnpj: json.resultado.cnpj})
  this.setState({cod_cont: json.resultado.cod_cont})

  this.setState({rua: json.resultado.rua})
  this.setState({bairro: json.resultado.bairro})
  this.setState({cod_cidade: json.resultado.cod_cidade})
  
  this.setState({complemento: json.resultado.complemento})

  this.setState({ativo_tabela_preco: json.resultado.ativo_tabela_preco})

  this.setState({dt_cadastro: json.resultado.dt_create})

  this.setState({preco_15: json.resultado.preco_15})
  this.setState({preco_30: json.resultado.preco_30})
  this.setState({preco_60: json.resultado.preco_60})
  
  this.setState({obs: json.resultado.observacao})
  
  this.setState({agencia: json.resultado.agencia})
  this.setState({conta: json.resultado.conta})
  this.setState({banco: json.resultado.banco})
  this.setState({tp_conta: json.resultado.tp_conta})
  
  let dados = {
    id: json.resultado.id,
    cep:json.resultado.cep,
    rua:json.resultado.rua,
    bairro:json.resultado.bairro,
    cod_cidade: Number(json.resultado.cod_cidade),
    uf:json.resultado.estado,
    complemento:json.resultado.complemento,
  }
  localStorage.setItem('aba_endereco',JSON.stringify(dados))
  this.setState({aba_endereco: dados})
  
  this.setState({'visible':true})
  
  
  }else{
  alert(json)
  }
  
  
    })
  
  }else{
    this.setState({botao: "Cadastrar"})
    this.setState({visible:true})
  }
  
  
  
  }



  render() {
    return (
      <div>
        <Modal
          width={700}
          title="Cadastro de Veículos"
          visible={this.state.visible}
          footer={[
            <Button key="back" onClick={(e)=>this.CloseModal()}>
              Cancelar
              </Button>,
            <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
              Cadastrar
              </Button>,
          ]}
        >
          <Tabs onChange={console.log()} type="card">
            <TabPane tab="Dados do Veiculo" key="1">
              <table>
                <tr>
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
                  <th>

                    Data de Cadastro:<br />
                    <DatePicker format={dateFormatList}
                      disabled
                      defaultValue={moment(this.state.dt_cadastro, dateFormat)} format={dateFormat}
                    />

                  </th>
                  <th>
                    Tipo de Veículo:<br />
                    <Select
                      labelInValue
                      defaultValue={{ value: this.state.tp_pessoa }}
                      style={{ width: 190 }}
                      onChange={(e) => { this.setState({ 'tp_pessoa': e.value }) }}
                    >
                      <Option value="1">Rádio</Option>
                      <Option value="2">Jornal</Option>
                      <Option value="3">Outros</Option>
                    </Select>
                  </th>
                </tr>
              </table>
              <table>
                <tr>
                  <th>
                    <b>Razão Social:</b>
                    <Input 
                    defaultValue={this.state.rz_social}
                    onChange={(e)=>{this.setState({"rz_social":e.target.value})}}
                    placeholder="Razão Social" />
                  </th>
                  <th>
                    <b>Fantasia:</b>
                    <Input 
                    defaultValue={this.state.fantasia}
                    onChange={(e)=>{this.setState({"fantasia":e.target.value})}}
                    placeholder="Fantasia" />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>E-mail:</b>
                    <Input 
                    defaultValue={this.state.email}
                    onChange={(e)=>{this.setState({"email":e.target.value})}}
                    placeholder="E-mail" />
                  </th>
                  <th>
                    <b>Telefone:</b>
                    <Input
                      placeholder="Telefone"
                      defaultValue = {this.state.telefone}
                      onChange={e => this.setState({ telefone: formatToPhone(e.target.value) })} />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Whatsapp</b>
                    <Input
                      placeholder="Whatsapp"
                      defaultValue={this.state.whatsapp}
                      onChange={e => this.setState({ whatsapp: formatToPhone(e.target.value) })} />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Contato:</b>
                    <Input 
                    defaultValue={this.state.contato}
                    onChange={(e)=>{this.setState({"contato":e.target.value})}}
                    placeholder="Contato" />
                  </th>
                  <th>
                    <b>Nome Red.:</b>
                    <Input 
                    defaultValue={this.state.nome_red}
                    onChange={(e)=>{this.setState({"nome_red":e.target.value})}}
                    placeholder="Nome Red." />
                  </th>
                </tr>
                <tr>
                  <th>
                    <b>Cidade Red.:</b>
                    
                    <Input placeholder="Cidade Red."
                    defaultValue={this.state.cidade_red}
                    onChange={(e)=>{this.setState({"cidade_red":e.target.value})}}
                     />
                  </th>
                </tr>
                <b>Observação:</b>
                <tr>
                  <th colspan="2">
                    <TextArea 
                    defaultValue={this.state.obs}
                    onChange={(e)=>{this.setState({"obs":e.target.value})}}
                    rows={4} />
                  </th>
                </tr>
              </table>
            </TabPane>
            <TabPane tab="Tabela de Preços" key="2">
              <table>
                <tr>
                  <th>
                    Ativo na Tabela:<br />
                    <Select
                      labelInValue
                      defaultValue={{ value: this.state.ativo_tabela_preco }}
                      style={{ width: 190 }}
                      onChange={(e) => { this.setState({ 'ativo_tabela_preco': e.value }) }}
                    >
                      <Option value="0">Sim</Option>
                      <Option value="1">Não</Option>

                    </Select>
                  </th>
                </tr>
                <tr>
                  <th>
                    15" <Input 
                      defaultValue={this.state.preco_15}
                      onChange={(e)=>{this.setState({"preco_15":e.target.value})}}
                    placeholder='15"' />
                  </th>
                  <th>
                    30" <Input 
                      defaultValue={this.state.preco_30}
                      onChange={(e)=>{this.setState({"preco_30":e.target.value})}}
                    placeholder='30"' />
                  </th>
                  <th>
                    60" <Input 
                      defaultValue={this.state.preco_60}
                      onChange={(e)=>{this.setState({"preco_60":e.target.value})}}
                    placeholder='60"' />
                  </th>
                </tr>
              </table>
            </TabPane>

            <TabPane tab="Endereço" key="3">

              <AbaEndereco dados={this.state.aba_endereco} callbackFunction={(e) => this.setState(e)} />

            </TabPane>

            <TabPane tab="Documentos" key="4">
              <table>
                <tr>
                  <th>
                    Inscr. Est.:
                      <Input 
                      defaultValue={this.state.insc_est}
                      onChange={(e)=>{this.setState({"insc_est":e.target.value})}}
                      placeholder="Inscr. Est." />
                  </th>
                  <th>
                    CNPJ:
                    <Input 
                    defaultValue={this.state.cnpj}
                    onChange={(e)=>{this.setState({"cnpj":e.target.value})}}
                    placeholder="CNPJ" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Cod. Contab.:
                    <Input 
                     defaultValue={this.state.cod_cont}
                     onChange={(e)=>{this.setState({"cod_cont":e.target.value})}}
                    placeholder="Cod. Contab." />
                  </th>
                </tr>

              </table>
            </TabPane>

            <TabPane tab="Dados Bancarios" key="5">

              <table>
                <tr>
                  <th>
                    Banco:
                    <Input 
                    defaultValue={this.state.banco}
                    onChange={(e)=>{this.setState({"banco":e.target.value})}}
                    placeholder="Banco" />
                  </th>
                  <th>
                    Agência:
                      <Input 
                     defaultValue={this.state.agencia}
                     onChange={(e)=>{this.setState({"agencia":e.target.value})}}
                      placeholder="Agência" />
                  </th>
                </tr>
                <tr>
                  <th>
                    Conta:
                    <Input 
                    defaultValue={this.state.conta}
                    onChange={(e)=>{this.setState({"conta":e.target.value})}}
                    placeholder="Conta" />
                  </th>
                  <th>
                    Tipo Conta:
                      <Input 
                      defaultValue={this.state.tp_conta}
                      onChange={(e)=>{this.setState({"tp_conta":e.target.value})}}
                      placeholder="Tipo Conta" />
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

export default CadVeiculos;


