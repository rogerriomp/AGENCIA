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

class CadAnunciantes extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible:false,
        select_permission: undefined,
        
        id: "",
        nome: "",
        fantasia:"",
        cnpj:"",
        agencia_select:"",
        tp_pessoa:"1",
        classificacao:"",
        telefone:"",
        observacao:"",
        whatsapp:"",
        cep:"",
        rua:"",
        bairro:"",
        cod_cidade:"",
        uf:"",
        complemento:"",
        banco:"",
        agencia:"",
        conta:"",
        tp_conta:"",
        historico:"",
        insc_est: "", 
        cod_cont:"", 
        nome_red: "",
        cidade_red: "",
        dt_cadastro: "",
        botao: "Editar",




         }

         this.convertData = this.convertData.bind(this)
         this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(){

    
      let dados_cadastro = {
        'id': this.state.id,
        'nome': this.state.nome,
        'fantasia':this.state.fantasia,
        'cnpj':this.state.cnpj,
        'agencia_select':this.state.agencia_select,
        'tp_pessoa':"1",
        'classificacao':this.state.classificacao,
        'telefone':this.state.telefone,
        'observacao':this.state.observacao,
        'whatsapp':this.state.whatsapp,
        'cep':this.state.cep,
        'rua':this.state.rua,
        'bairro':this.state.bairro,
        'cod_cidade':this.state.cod_cidade,
        'uf':this.state.uf,
        'complemento':this.state.complemento,
        'banco':this.state.banco,
        'agencia':this.state.agencia,
        'conta':this.state.conta,
        'tp_conta':this.state.tp_conta,
        'historico':this.state.historico,
        'insc_est':this.state.insc_est, 
        'cod_cont':this.state.cod_cont, 
        'nome_red':this.state.nome_red,
        'cidade_red':this.state.cidade_red,
        

      }
    
  console.log("Dados de cadastro: ", dados_cadastro)  
      fetch('/api/cadastra_anunciante', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'cadastro_anunciante': dados_cadastro,
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
        return [day,mnth,date.getFullYear()].join("/");
    }

    CloseModal(){

      this.setState({
        visible: false,
      });
    } 


    componentDidMount(){
  
      if (this.props.anunciante !== undefined){
    console.log("cod_agencia: que chegou", this.props.anunciante)
    fetch('/api/carregadadosanunciante', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'consulta_anunciante':this.props.anunciante
      })
    })
      .then((r) => r.json())
      .then((json) => {
    
    
    if('resultado' in json){
    console.log(json.resultado, "Resultado Recebido-------------")

    
    this.setState({id: json.resultado.id})
    this.setState({nome: json.resultado.nome})
    this.setState({fantasia: json.resultado.fantasia})
    this.setState({cnpj: json.resultado.cnpj})
    this.setState({agencia_select: json.resultado.agencia_select})
    this.setState({tp_pessoa: json.resultado.tp_pessoa.toString()})
    this.setState({classificacao: json.resultado.classificacao})
    this.setState({telefone: json.resultado.telefone})
    this.setState({observacao: json.resultado.observacao})
    this.setState({whatsapp: json.resultado.whatsapp})
    this.setState({cep: json.resultado.cep})
    this.setState({rua: json.resultado.rua})
    this.setState({bairro: json.resultado.bairro})
    this.setState({cod_cidade: json.resultado.cod_cidade})
    this.setState({uf: json.resultado.estado})
    
    this.setState({complemento: json.resultado.complemento})
    this.setState({banco: json.resultado.banco})
    this.setState({agencia: json.resultado.agencia})

    this.setState({conta: json.resultado.conta})
    this.setState({tp_conta: json.resultado.tp_conta})
    this.setState({historico: json.resultado.historico})
    this.setState({insc_est: json.resultado.insc_est})
    this.setState({cod_cont: json.resultado.cod_cont})

    this.setState({nome_red: json.resultado.nome_red})

    this.setState({cidade_red: json.resultado.cidade_red})
    this.setState({dt_cadastro: json.resultado.dt_create})
    
    
    
    
    let dados = {
      id_anunciante: json.resultado.id,
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
                       title="Cadastro de Anunciantes"
                       visible={this.state.visible}
                       footer={[
                           <Button key="back" onClick={console.log()}>
                               Cancelar
                     </Button>,
                           <Button key="Cadastrar" type="primary" onClick={this.cadastrar}>
                               Cadastrar
                     </Button>,
                       ]}
                   >                
                   <Tabs onChange={console.log()} type="card">              
                   <TabPane tab="Dados do Anunciante" key="1">
                   <table>
                     <tr>
                         <th>
                   Tipo Pessoa:<br/>
                   <Select
           labelInValue
           defaultValue={{ value: '1' }}
           style={{ width: 190}}
           onChange={(e) => { this.setState({ 'select_permission': e }) }}
         >
           <Option value="1">Jurídica</Option>
           <Option value="2">Física</Option>
         </Select>
         </th>
         <th>
           
         Data de Cadastro:<br/>
                             <DatePicker format={dateFormatList}
                             disabled
                             defaultValue={moment(this.state.dt_cadastro, dateFormatList[0])} format={dateFormatList}  
                             
                             />
       
             </th>
             <th>
             <b>Classificação.:</b> 
                     <Input 
                      defaultValue={this.state.classificacao}
                      onChange={e =>this.setState({classificacao:e.target.value})}
                     placeholder="Classificação" />
                 </th>
         </tr>
         </table>
             <table>
         <tr>
         <th>
                     <b>Nome:</b> 
                     <Input placeholder="Nome"
                     defaultValue={this.state.nome}
                     onChange={e =>this.setState({nome:e.target.value})}
                     />
                     </th>
                     <th>
                     <b>Fantasia:</b> 
                     <Input 
                     defaultValue={this.state.fantasia}
                     onChange={e =>this.setState({fantasia:e.target.value})}
                     placeholder="Fantasia" />
                     </th>
                     </tr>
                     <tr>
                     <th>
                     <b>Telefone:</b> 
                     <Input 
                     placeholder="Telefone" 
                     defaultValue={this.state.telefone}
                     onChange={e =>this.setState({telefone:formatToPhone(e.target.value)})}  />
                     </th>
             <th>
                     <b>Whatsapp</b> 
                     <Input 
                     placeholder="Whatsapp" 
                     defaultValue={this.state.whatsapp}
                     onChange={e =>this.setState({whatsapp:formatToPhone(e.target.value)})}  />
                     </th>
                   </tr>
                   <tr>
                         
                     <th>
                     <b>Nome Red.:</b> 
                     <Input 
                     defaultValue={this.state.nome_red}
                     onChange={e =>this.setState({nome_red:e.target.value})}
                     placeholder="Nome Red." />
                     </th>
                     </tr>
                     <tr>
                     <th>
                     <b>Cidade Red.:</b> 
                     <Input 
                    defaultValue={this.state.cidade_red}
                    onChange={e =>this.setState({cidade_red:e.target.value})}
                     placeholder="Cidade Red." />
                     </th>
                     <th>
                   Agencia:<br/>
                   <Select
           labelInValue
           defaultValue={{ value: '1' }}
           style={{ width: 190}}
           onChange={(e) => { this.setState({ agencia_select: e.value }) }}
         >
           <Option value="1">Agencia 1</Option>
           <Option value="2">Agencia 2</Option>
         </Select>
         </th>
                     </tr>
                   <b>Observação:</b>
                       <tr>
                         <th  colspan="2">
                         <TextArea 
                          defaultValue={this.state.observacao}
                          onChange={e =>this.setState({observacao:e.target.value})}
                         rows={4} />
                           </th>
                         </tr>
         </table>
                   </TabPane>
       
                   <TabPane tab="Endereço" key="3">
         
       <AbaEndereco callbackFunction={(e)=>this.setState(e)}/>
       
                   </TabPane>
                     
                   <TabPane tab="Documentos" key="4">
                   <table>
                     <tr>
                           <th>
                             Inscr. Est.:
                             <Input 
                              defaultValue={this.state.insc_est}
                              onChange={e =>this.setState({insc_est:e.target.value})}
                             placeholder="Inscr. Est." />
                             </th>
                         <th>
                           CNPJ:
                           <Input 
                           defaultValue={this.state.cnpj}
                           onChange={e =>this.setState({cnpj:e.target.value})}
                           placeholder="CNPJ" />
                           </th>
                           </tr>
                           <tr>
                         <th>
                           Cod. Contab.:
                           <Input 
                           defaultValue={this.state.cod_cont}
                           onChange={e =>this.setState({cod_cont:e.target.value})}
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
                           onChange={e =>this.setState({banco:e.target.value})}
                           placeholder="Banco" />
                           </th>
                           <th>
                             Agência:
                             <Input 
                            defaultValue={this.state.agencia}
                            onChange={e =>this.setState({agencia:e.target.value})}
                             placeholder="Agência" />
                             </th>
                           </tr>
                           <tr>
                         <th>
                           Conta:
                           <Input 
                           defaultValue={this.state.conta}
                           onChange={e =>this.setState({conta:e.target.value})}
                           placeholder="Conta" />
                           </th>
                           <th>
                             Tipo Conta:
                             <Input 
                             defaultValue={this.state.tp_conta}
                             onChange={e =>this.setState({tp_conta:e.target.value})}
                             placeholder="Tipo Conta" />
                             </th>
                           </tr>
                       
                       </table>
                       </TabPane>
                       <TabPane tab="Contato" key="6">
                       <AbaContato/>
                       </TabPane>
                       </Tabs>
                       </Modal>
               </div>
      );
    }
  }
  
  export default CadAnunciantes;
  
  
  