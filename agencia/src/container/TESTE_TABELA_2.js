import React, { Component, Image } from 'react';
import { Link, BrowserRouter } from 'react-router-dom'
import { Modal, Button, Select, Tabs, DatePicker , Table} from 'antd';
import { Input } from 'antd';
import { isCPF, formatToCPF, formatToPhone } from 'brazilian-values';

const { Option } = Select;
const columns = [
    {
      title: 'Colocação',
      width: 250,
      dataIndex: 'colocacao',
      fixed: true,
    },    
    {
        title: '1',
        dataIndex: 'um',
      },
    {
      title: '2',
      dataIndex: 'dois',
    },
    ,
    {
      title: '3',
      dataIndex: 'tres',
    },
    ,
    {
      title: '4',
      dataIndex: 'quatro',
    },
    ,
    {
      title: '5',
      dataIndex: 'cinco',
    },
    ,
    {
      title: '6',
      dataIndex: 'seis',
    },
    ,
    {
      title: '7',
      dataIndex: 'sete',
    },
    ,
    {
      title: '8',
      dataIndex: 'oito',
    },
    ,
    {
      title: '9',
      dataIndex: 'nove',
    },
    ,
    {
      title: '10',
      dataIndex: 'dez',
    },
    ,
    {
      title: '11',
      dataIndex: 'onze',
    },
    ,
    {
      title: '12',
      dataIndex: 'doze',
    },
    ,
    {
      title: '13',
      dataIndex: 'treze',
    },
    ,
    {
      title: '14',
      dataIndex: 'quatorze',
    },
    ,
    {
      title: '15',
      dataIndex: 'quinze',
    },
    ,
    {
      title: '16',
      dataIndex: 'dezesseis',
    },
    ,
    {
      title: '17',
      dataIndex: 'desessete',
    },
    ,
    {
      title: '18',
      dataIndex: 'dezoito',
    },
    ,
    {
      title: '19',
      dataIndex: 'dezenove',
    },
    ,
    {
      title: '20',
      dataIndex: 'vinte',
    },
    ,
    {
      title: '21',
      dataIndex: 'vinte_um',
    },
    ,
    {
      title: '22',
      dataIndex: 'vinte_dois',
    },
    ,
    {
      title: '23',
      dataIndex: 'vinte_tres',
    },
    ,
    {
      title: '24',
      dataIndex: 'vinte_quatro',
    },
    ,
    {
      title: '25',
      dataIndex: 'vinte_cinco',
    },
    ,
    {
      title: '26',
      dataIndex: 'vinte_seis',
    },
    ,
    {
      title: '27',
      dataIndex: 'vinte_sete',
    },
    ,
    {
      title: '28',
      dataIndex: 'vinte_oito',
    },
    ,
    {
      title: '29',
      dataIndex: 'vinte_nove',
    },
    ,
    {
      title: '30',
      dataIndex: 'trinta',
    },
    ,
    {
      title: '31',
      dataIndex: 'trinta_um',
    },
    {
        title: 'Total',
        dataIndex: 'total',
      },

  ];


class Tabela2 extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        visible:true,
        select_permission: undefined,
        selectedRowKeys: [],
        data: [],
        nome:"",
        cargo:"",
        email:"",
        atualiza: false,
        um:'',
        dois:"",
        // "3":"",
        // "4":"",
        // "5":"",
        // "6":"",
        // "7":"",
        // "8":"",
        // "9":"",
        // "10":"",
        // "11":"",
        // "12":"",
        // "13":"",
        // "14":"",
        // "15":"",
        // "16":"",
        // "17":"",
        // "18":"",
        // "19":"",
        // "20":"",
        // "21":"",
        // "22":"",
        // "23":"",
        // "24":"",
        // "25":"",
        // "26":"",
        // "27":"",
        // "28":"",
        // "29":"",
        // "30":"",
        // "31":"",
         
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
    let row = {
        colocacao: this.state.colocacao,
        um:this.state.um,
        dois:this.state.dois,
        // "tres":this.state['3'],
        // "quatro":this.state['4'],
        // "cinco":this.state['5'],
        // "seis":this.state['6'],
        // "sete":this.state['7'],
        // "oito":this.state['8'],
        // "nove":this.state['9'],
        // "dez":this.state['10'],
        // "onze":this.state['11'],
        // "doze":this.state['12'],
        // "treze":this.state['13'],
        // "quartoze":this.state['14'],
        // "quinze":this.state['15'],
        // "dezesseis":this.state['16'],
        // "dezesete":this.state['17'],
        // "dezoito":this.state['18'],
        // "dezenove":this.state['19'],
        // "vinte":this.state['20'],
        // "vinte_um":this.state['21'],
        // "vinte_dois":this.state['22'],
        // "vinte_tres":this.state['23'],
        // "vinte_quatro":this.state['24'],
        // "vinte_cinco":this.state['25'],
        // "vinte_seis":this.state['26'],
        // "vinte_sete":this.state['27'],
        // "vinte_oito":this.state['28'],
        // "vinte_nove":this.state['29'],
        // "trinta":this.state['30'],
        // "trinta_um":this.state['31']
    }


let dados = this.state.data
dados.push(row)
this.setState({data:dados})

console.log(this.state, '----- dados row')
    

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
                                   Colocação: <br/>
                                <Input 
                                style={{ width: 100 }}
              defaultValue={this.state.desc}
              onChange={(e)=>{this.setState({"colocacao":e.target.value})}}
              placeholder="Colocação" />   
                                </th>
                                <th style={{"text-align":"center"}}>
                                 1<br/>
                                <Input 

              style={{ width: 35 }}
              defaultValue={this.state.um}
              onChange={(e)=>{this.setState({um:e.target.value})}}
              placeholder="1" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 2<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state.dois}
              onChange={(e)=>{this.setState({dois:e.target.value})}}
              placeholder="2" />   
                                </th>
                                {/* <th style={{"text-align":"center"}}>
                                 3<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state["3"]}
              onChange={(e)=>{this.setState({"3":e.target.value})}}
              placeholder="3" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 4<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state["4"]}
              onChange={(e)=>{this.setState({"4":e.target.value})}}
              placeholder="4" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 5<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state["5"]}
              onChange={(e)=>{this.setState({"5":e.target.value})}}
              placeholder="5" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 6<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state["6"]}
              onChange={(e)=>{this.setState({"6":e.target.value})}}
              placeholder="6" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 7<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state["7"]}
              onChange={(e)=>{this.setState({"7":e.target.value})}}
              placeholder="7" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 8<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['8']}
              onChange={(e)=>{this.setState({"8":e.target.value})}}
              placeholder="8" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 9<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['9']}
              onChange={(e)=>{this.setState({"9":e.target.value})}}
              placeholder="9" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 10<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['10']}
              onChange={(e)=>{this.setState({"10":e.target.value})}}
              placeholder="10" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 11<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state["11"]}
              onChange={(e)=>{this.setState({"11":e.target.value})}}
              placeholder="11" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 12<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state["12"]}
              onChange={(e)=>{this.setState({"12":e.target.value})}}
              placeholder="12" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 13<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['13']}
              onChange={(e)=>{this.setState({"13":e.target.value})}}
              placeholder="13" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 14<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['14']}
              onChange={(e)=>{this.setState({"14":e.target.value})}}
              placeholder="14" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 15<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['15']}
              onChange={(e)=>{this.setState({"15":e.target.value})}}
              placeholder="15" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 16<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['16']}
              onChange={(e)=>{this.setState({"16":e.target.value})}}
              placeholder="16" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 17<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['17']}
              onChange={(e)=>{this.setState({"17":e.target.value})}}
              placeholder="17" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 18<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['18']}
              onChange={(e)=>{this.setState({"18":e.target.value})}}
              placeholder="18" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 19<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['19']}
              onChange={(e)=>{this.setState({"19":e.target.value})}}
              placeholder="19" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 20<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['20']}
              onChange={(e)=>{this.setState({"20":e.target.value})}}
              placeholder="20" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 21<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['21']}
              onChange={(e)=>{this.setState({"21":e.target.value})}}
              placeholder="21" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 22<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['22']}
              onChange={(e)=>{this.setState({"22":e.target.value})}}
              placeholder="22" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 23<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['23']}
              onChange={(e)=>{this.setState({"23":e.target.value})}}
              placeholder="23" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 24<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['24']}
              onChange={(e)=>{this.setState({"24":e.target.value})}}
              placeholder="24" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 25<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['25']}
              onChange={(e)=>{this.setState({"25":e.target.value})}}
              placeholder="25" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 1<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['26']}
              onChange={(e)=>{this.setState({"26":e.target.value})}}
              placeholder="26" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 1<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['27']}
              onChange={(e)=>{this.setState({"27":e.target.value})}}
              placeholder="27" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 28<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['28']}
              onChange={(e)=>{this.setState({"28":e.target.value})}}
              placeholder="28" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 29<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['29']}
              onChange={(e)=>{this.setState({"29":e.target.value})}}
              placeholder="29" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 30<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['30']}
              onChange={(e)=>{this.setState({"30":e.target.value})}}
              placeholder="30" />   
                                  
                                </th>
                                <th style={{"text-align":"center"}}>
                                 31<br/>
                                <Input 
              style={{ width: 35 }}
              defaultValue={this.state['31']}
              onChange={(e)=>{this.setState({"31":e.target.value})}}
              placeholder="31" />   
                                  
                                </th> */}
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


                        <Table 
                         scroll={{ x: 3000 }}
                        rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />

       
       {this.state.data}
        </div>
      );
    }
  }

  export default Tabela2;
  
  
  