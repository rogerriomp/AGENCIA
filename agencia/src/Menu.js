import React from 'react';
import { Menu} from 'antd';
import { Link, BrowserRouter } from 'react-router-dom'
import { MailOutlined } from '@ant-design/icons';
import PesqTabPreco from './container/Pesquisa_Tabela_Preco'
import PesquisaFuncionario from './container/PesquisaFuncionario'
import PesquisaAgencia from './container/PesquisaAgencia'
import PesquisaParceiro from './container/PesquisaParceiros'
import PesquisaAnunciantes from './container/PesquisaAnunciantes'
import PesquisaVeiculos from './container/PesquisaVeiculos'
import PesquisaMapaPI from './container/PesquisaMapaPI'

const { SubMenu } = Menu;

class MenuInicial extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'dark',
      current: '1',
      tabela_preco_visible: false,
      funcionario_visible: false,
      agencia_visible: false,
      parceiro_visible: false,
      anunciante_visible: false,
      veiculo_visible: false,
      mapa_visible: false,
      visible: false,
      // links: undefined
    }
    this.changeTheme = this.changeTheme.bind(this)
    this.onChangeTPVisible = this.onChangeTPVisible.bind(this)    
    this.onChangeFVisible = this.onChangeFVisible.bind(this)   
    this.onChangeAgVisible = this.onChangeAgVisible.bind(this)   
    this.onChangePVisible = this.onChangePVisible.bind(this)   
    this.onChangeAnVisible = this.onChangeAnVisible.bind(this)   
    this.onChangeVVisible = this.onChangeVVisible.bind(this)   
    this.onChangeMPVisible = this.onChangeMPVisible.bind(this)   
  }


  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };


  onChangeTPVisible() {
    this.setState({ 'tabela_preco_visible': true })
  }

  closeTPModal= () => this.setState({'tabela_preco_visible': false});


  onChangeFVisible() {
    this.setState({ 'funcionario_visible': true })
  }

  closeFModal= () => this.setState({'funcionario_visible': false});

  onChangeAgVisible() {
    this.setState({ 'agencia_visible': true })
  }

  closeAgModal= () => this.setState({'agencia_visible': false});

  onChangePVisible() {
    this.setState({ 'parceiro_visible': true })
  }

  closePModal= () => this.setState({'parceiro_visible': false});

  onChangeAnVisible() {
    this.setState({ 'anunciante_visible': true })
  }

  closeAnModal= () => this.setState({'anunciante_visible': false});

  onChangeVVisible() {
    this.setState({ 'veiculo_visible': true })
  }

  closeVModal= () => this.setState({'veiculo_visible': false});

  onChangeMPVisible() {
    this.setState({ 'mapa_visible': true })
  }

  closeMPModal= () => this.setState({'mapa_visible': false});

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
                                <Link key={1} onClick={this.onChangeTPVisible}>Tabela de Preço</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={2} onClick={this.onChangeFVisible}>Pesquisa Funcionario</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={3} onClick={this.onChangeAgVisible}>Pesquisa Agência</Link>
                            </Menu.Item>
                          
                            <Menu.Item>
                              <Link key={4} onClick={this.onChangePVisible}>Pesquisa Parceiros</Link>
                            </Menu.Item>

                            <Menu.Item>
                              <Link key={5} onClick={this.onChangeAnVisible}>Pesquisa Anunciantes</Link>
                            </Menu.Item>
                          
                            <Menu.Item>
                              <Link key={6} onClick={this.onChangeVVisible}>Pesquisa Veiculos</Link>
                            </Menu.Item>
    
                            <Menu.Item>
                              <Link key={7} onClick={this.onChangeMPVisible}>Pesquisa Mapa/PI</Link>
                            </Menu.Item>
                            
                    </SubMenu>
            

                </Menu>
                {/*==============================================================================*/}
              </div>
            </div>

            <PesqTabPreco visible={this.state.tabela_preco_visible} closeModal={this.closeTPModal}/>
            <PesquisaFuncionario visible={this.state.funcionario_visible} closeModal={this.closeFModal}/>
            <PesquisaAgencia visible={this.state.agencia_visible} closeModal={this.closeAgModal}/>
            <PesquisaParceiro visible={this.state.parceiro_visible} closeModal={this.closePModal}/>
            <PesquisaAnunciantes visible={this.state.anunciante_visible} closeModal={this.closeAnModal}/>
            <PesquisaVeiculos visible={this.state.veiculo_visible} closeModal={this.closeVModal}/>
            <PesquisaMapaPI visible={this.state.mapa_visible} closeModal={this.closeMPModal}/>
      </div>
    );
  }
}

export default MenuInicial;

