import React, { Component, Image } from 'react';
import { Menu, Icon, Switch, Layout, Button } from 'antd';



import { Link, BrowserRouter } from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import PesquisaFuncionario from './container/PesquisaFuncionario'

import Routes from './Router';


const { SubMenu } = Menu;

class MenuInicial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      current: '1',
      // links: undefined
    }
    this.changeTheme = this.changeTheme.bind(this)
    
  }


  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };



  render() {
    return (
      <div>
          <BrowserRouter>
            <div>

              <div>

                <br />
                <br />
              
                <Menu
                  theme={this.state.theme}
                  onClick={this.handleClick}
                  style={{ width: 256 }}
                  defaultOpenKeys={['sub1']}
                  selectedKeys={[this.state.current]}
                  mode="inline"
                >
                  

                  <SubMenu key="sub1" icon={<MailOutlined />} title="Padrão">
                            <Menu.Item>
                              <Link key={1} to={'/cadfuncionario'}>Cadastro Funcionario</Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link key={2} to={'/cadveiculos'}>Cadastro de Veiculos</Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link key={3} to={'/BASE'}>Base</Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link key={4} to={'/cadagencia'}>Cadastro Agencia</Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link key={5} to={'/abaendereco'}>Aba Endereco</Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link key={6} to={'/cadparceiros'}>Cadastro de Parceiros Comerciais</Link>
                            </Menu.Item>
                          
                            <Menu.Item>
                              <Link key={7} to={'/cadanunciantes'}>Cadastro de Anunciantes</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={8} to={'/tabeladepreco'}>Tabela de Preço</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={9} to={'/PesquisaFuncionario'}>Pesquisa Funcionario</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={10} to={'/PesquisaAgencia'}>Pesquisa Agência</Link>
                            </Menu.Item>
                          
                            <Menu.Item>
                              <Link key={11} to={'/PesquisaParceiro'}>Pesquisa Parceiros</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={13} to={'/PesquisaAnunciantes'}>Pesquisa Anunciantes</Link>
                            </Menu.Item>
                          
                            <Menu.Item>
                              <Link key={14} to={'/PesquisaVeiculos'}>Pesquisa Veiculos</Link>
                            </Menu.Item>
    
                            <Menu.Item>
                              <Link key={14} to={'/PesquisaMapaPI'}>Pesquisa Mapa/PI</Link>
                            </Menu.Item>
                            
                    </SubMenu>
            

                </Menu>
                {/*==============================================================================*/}
              </div>
              <Routes />
            </div>
          </BrowserRouter>


      </div>
    );
  }
}

export default MenuInicial;

