import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import PesqTabPreco from './container/Pesquisa_Tabela_Preco'
import PesquisaFuncionario from './container/PesquisaFuncionario'
import PesquisaAgencia from './container/PesquisaAgencia'
import PesquisaParceiro from './container/PesquisaParceiros'
import PesquisaAnunciantes from './container/PesquisaAnunciantes'
import PesquisaVeiculos from './container/PesquisaVeiculos'
import PesquisaMapaPI from './container/PesquisaMapaPI'
import Menu from './Menu'
import Login from './Login'

export class Routes extends Component {
    state = {
        theme: 'dark',
        current: '1',
      };
    
      changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render() {
        return (
                <Switch>
                    <Route exact path='/login' component={Login}/> 
                    <Route exact path='/' component={Menu}/> 
                    <Route exact path='/tabeladepreco' component={PesqTabPreco}/>
                    <Route exact path='/PesquisaFuncionario' component={PesquisaFuncionario}/>
                    <Route exact path='/PesquisaAgencia' component={PesquisaAgencia}/>
                    <Route exact path='/PesquisaParceiro' component={PesquisaParceiro}/>
                    <Route exact path='/PesquisaAnunciantes' component={PesquisaAnunciantes}/>
                    <Route exact path='/PesquisaVeiculos' component={PesquisaVeiculos}/>
                    <Route exact path='/PesquisaMapaPI' component={PesquisaMapaPI}/>
                    <Route path="*" component={() => <h1>Page not found</h1>} />

                </Switch>


        )
    }
};

export default Routes;