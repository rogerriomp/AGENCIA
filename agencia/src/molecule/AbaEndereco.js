import React, { Component, Image, PropTypes } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker } from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';

const { Option } = Select;


class AbaEndereco extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible:true,
        select_permission: undefined,
    
        cep: JSON.parse(localStorage.getItem('aba_endereco')).cep,
        rua:JSON.parse(localStorage.getItem('aba_endereco')).rua,
        bairro:JSON.parse(localStorage.getItem('aba_endereco')).bairro,
        cod_cidade:JSON.parse(localStorage.getItem('aba_endereco')).cod_cidade,
        uf:JSON.parse(localStorage.getItem('aba_endereco')).uf,
        complemento:JSON.parse(localStorage.getItem('aba_endereco')).complemento,

        lista_estados: [{value: 1, label: 'Acre'},
        {value: 2, label: 'Alagoas'},
        {value: 3, label: 'Amazonas'},
        {value: 4, label: 'Amapá'},
        {value: 5, label: 'Bahia'},
        {value: 6, label: 'Ceará'},
        {value: 7, label: 'Distrito Federal'},
        {value: 8, label: 'Espírito Santo'},
        {value: 9, label: 'Goiás'},
        {value: 10,label: 'Maranhão'},
        {value: 11, label: 'Minas Gerais'},
        {value: 12, label: 'Mato Grosso do Sul'},
        {value: 13, label: 'Mato Grosso'},
        {value: 14, label: 'Pará'},
        {value: 15, label: 'Paraíba'},
        {value: 16, label: 'Pernambuco'},
        {value: 17, label: 'Piauí'},
        {value: 18, label: 'Paraná'},
        {value: 19, label: 'Rio de Janeiro'},
        {value: 20, label: 'Rio Grande do Norte'},
        {value: 21, label: 'Rondônia'},
        {value: 22, label: 'Roraima'},
        {value: 23, label: 'Rio Grande do Sul'},
        {value: 24, label: 'Santa Catarina'},
        {value: 25, label: 'Sergipe'},
        {value: 26, label: 'São Paulo'},
        {value: 27, label: 'Tocantins'}],
        default_uf: 23,
        lista_cidades: []

         }
this.Altera=this.Altera.bind(this)
this.onSearch = this.onSearch.bind(this)
    }

    Altera(e){
      this.setState(e)
      this.props.callbackFunction(e);

      if('uf' in e){
        fetch('/api/consultacidades', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'consulta': {'estado':e.uf}
          })
        })
          .then((r) => r.json())
          .then((json) => {
            this.setState({cod_cidade:null})
            this.props.callbackFunction({cod_cidade:null});
            this.setState({lista_cidades:json.cidades})
      
          })
    

      }

    }

    componentDidMount(){
      if(JSON.parse(localStorage.getItem('aba_endereco')).id_funcionario==null){
        fetch('/api/consultacidades', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'consulta': {'estado':this.state.default_uf}
          })
        })
          .then((r) => r.json())
          .then((json) => {
            this.setState({uf: this.state.default_uf})
            this.setState({lista_cidades:json.cidades})
            // this.setState({visible:true})
      
          })
      }else{
        fetch('/api/consultacidades', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'consulta': {'estado':JSON.parse(localStorage.getItem('aba_endereco')).uf}
          })
        })
          .then((r) => r.json())
          .then((json) => {

           
            this.setState({lista_cidades:json.cidades})
            // this.setState({visible:true})
      
          })
      }

    }
    onSearch(val) {
      console.log('search:', val);
    }

  BuscaCidades(){
    

  }
   
    render() {
      return (
        <div>

                <table>
                    <tr>
                        <th>
                        <b>CEP::</b> 
              <Input 
              placeholder="CEP" 
              defaultValue={this.state.cep}
              onChange={(e)=>{this.Altera({'cep':e.target.value})}}
              />
                            </th>
                        </tr>
                    </table>
                
                <table>
                <tr>
  <td colspan="3">
              <b>Rua:</b> 
              <Input placeholder="Rua"
              defaultValue={this.state.rua}
              onChange={(e)=>{this.Altera({'rua':e.target.value})}} 
              />
              </td>
              </tr>
              <tr>
                  <th>
              <b>Bairro:</b> 
              <Input 
              placeholder="Bairro"
              defaultValue={this.state.bairro}
              onChange={(e)=>{this.Altera({"bairro":e.target.value})}}
              />
              </th>
              <th>
            Cidade:<br/>
            <Select
   
    labelInValue
    defaultValue={{ value: this.state.cod_cidade }}
    style={{ width: 190}}
    onChange={(e)=>{this.Altera({'cod_cidade':e.value})}}
  >
{this.state.lista_cidades.map(x => <Option value={x.value}>{x.label}</Option>)}
  </Select>
  </th>
  <th>
            UF:<br/>
            <Select
    labelInValue
    defaultValue={{ value: this.state.uf}}
    style={{ width: 190}}
    onChange={(e)=>{this.Altera({'uf':e.value})}}
  >
{this.state.lista_estados.map(x => <Option value={x.value}>{x.label}</Option>)}
  </Select>
  </th>
      </tr>
      <tr>
          <td colSpan="2">
                <b>Complemento:</b><br/>
                <Input 
                placeholder="Complemento"
                defaultValue={this.state.complemento}
                onChange={(e)=>{this.Altera({'complemento':e.target.value})}}
                />
              </td>
          </tr>
                    </table>
        </div>
      );
    }
  }
  
  export default AbaEndereco;
  
  
  