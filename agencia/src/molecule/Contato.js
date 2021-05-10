import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker , Table} from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';

const { Option } = Select;
const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
    },    
    {
        title: 'Cargo',
        dataIndex: 'cargo',
      },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },

  ];


class AbaContato extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible:true,
        select_permission: undefined,
        selectedRowKeys: [],
        dados: [],
        nome:"",
        cargo:"",
        email:"",
        atualiza: false
         
    }
         


         this.incluir = this.incluir.bind(this)

    }
    excluir(){
        let dados = this.state.data
        this.state.selectedRowKeys.map(x=> {dados.splice(x, 1)})
        this.setState({'data':dados})
        this.setState({'selectedRowKeys':[]})
    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
        }

    
    
        incluir(){
    
        if(this.state.nome.length> 0){
        
        let contato = {'nome': this.state.nome,
        'email': this.state.email,
        'cargo': this.state.cargo,
    }
    let d = this.state.dados
    d.push(contato)
    this.setState({dados:d})

    this.setState({nome:""})
    this.setState({cargo:""})
    this.setState({email:""})

}
else{
    alert("Escreva os dados do contato antes de clicar em inserir!")
}
      
  console.log("LISTA_CONTATOS", this.state.dados)
    }


    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
          };
          
      return (
        <div>
  <table>
                            <tr>
                                <th>
                                   Nome: <br/>
                                <Input 
              defaultValue={this.state.nome}
              onChange={(e)=>{this.setState({"nome":e.target.value})}}
              placeholder="Nome" />   
                                </th>
                                <th>
                                    Cargo: <br/>
                                <Input 
              defaultValue={this.state.cargo}
              onChange={(e)=>{this.setState({"cargo":e.target.value})}}
              placeholder="Cargo" />   
                                  
                                </th>
                                <th>
                                E-mail: <br/>
                                <Input 
              defaultValue={this.state.email}
              onChange={(e)=>{this.setState({"email":e.target.value})}}
              placeholder="E-mail" />   
                                    </th>
                            </tr>
                            <tr/>
                            <tr>
                                <th><Button key="excluir" onClick={this.excluir}>
                                    Excluir
              </Button>
                                    <Button key="inserir" onClick={this.incluir}>
                                    Inserir
              </Button></th>      
                            </tr>
                        </table>


                        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.dados} />

       
       {this.state.dados}
        </div>
      );
    }
  }

  export default AbaContato;
  
  
  