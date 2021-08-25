import React from 'react';
import { Menu} from 'antd';



import { Link, BrowserRouter } from 'react-router-dom'
import { MailOutlined } from '@ant-design/icons';

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
                  

                  <SubMenu key="sub1" icon={<MailOutlined />} title="Menus">
                            <Menu.Item>
                              <Link key={1} to={'/tabeladepreco'}>Tabela de Preço</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={2} to={'/PesquisaFuncionario'}>Pesquisa Funcionario</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={3} to={'/PesquisaAgencia'}>Pesquisa Agência</Link>
                            </Menu.Item>
                          
                            <Menu.Item>
                              <Link key={4} to={'/PesquisaParceiro'}>Pesquisa Parceiros</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={5} to={'/PesquisaAnunciantes'}>Pesquisa Anunciantes</Link>
                            </Menu.Item>
                          
                            <Menu.Item>
                              <Link key={6} to={'/PesquisaVeiculos'}>Pesquisa Veiculos</Link>
                            </Menu.Item>
    
                            <Menu.Item>
                              <Link key={7} to={'/PesquisaMapaPI'}>Pesquisa Mapa/PI</Link>
                            </Menu.Item>
                            
                    </SubMenu>
            

                </Menu>
                {/*==============================================================================*/}
              </div>
            </div>


      </div>
    );
  }
}

export default MenuInicial;

