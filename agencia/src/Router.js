import React, {Component} from 'react';
import {Route, Switch, Redirect, BrowserRouter, Link } from 'react-router-dom';
import { Menu, Icon, Layout } from 'antd';

import CadFuncionario from './container/Cadastro_Funcionario'
import BASE from './container/BASE'
import CadVeiculos from './container/Cadastro_Veiculos'
import Formulario_Iprev from './container/Formulario_Iprev'
import CadastroAgencia from './container/Cadastro_Agencia'
import AbaEndereco from './molecule/AbaEndereco'
import cadparceiros from './container/Cadastro_Parceiros'
import cadanunciantes from './container/Cadastro_Anunciantes'
import TabelaPreco from './container/Tabela_Preco'
import PesqTabPreco from './container/Pesquisa_Tabela_Preco'
import PesquisaFuncionario from './container/PesquisaFuncionario'
import PesquisaAgencia from './container/PesquisaAgencia'
import PesquisaParceiro from './container/PesquisaParceiros'
import PesquisaAnunciantes from './container/PesquisaAnunciantes'
import PesquisaVeiculos from './container/PesquisaVeiculos'
import PesquisaMapaPI from './container/PesquisaMapaPI'

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
                    <Route exact path='/' component={""}/>
                    <Route exact path='/cadfuncionario' component={CadFuncionario}/>
                    <Route exact path='/cadveiculos' component={CadVeiculos}/>
                    <Route exact path='/BASE' component={BASE}/>
                    <Route exact path='/cadagencia' component={CadastroAgencia}/>
                    <Route exact path='/abaendereco' component={AbaEndereco}/>
                    <Route exact path='/cadparceiros' component={cadparceiros}/>
                    <Route exact path='/cadanunciantes' component={cadanunciantes}/>
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