import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import CadFuncionario from './container/Cadastro_Funcionario'
import BASE from './container/BASE'
import CadVeiculos from './container/Cadastro_Veiculos'
import Formulario_Iprev from './container/Formulario_Iprev'
import CadastroAgencia from './container/Cadastro_Agencia'
import AbaEndereco from './molecule/AbaEndereco'
import MenuInicial from './Menu'

//ReactDOM.render(<Routes />, document.getElementById('root'));
ReactDOM.render(<MenuInicial />, document.getElementById('root'));
//ReactDOM.render(<Auth />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
