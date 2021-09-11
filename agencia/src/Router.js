import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
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
                    <Route path="*" component={() => <h1>Page not found</h1>} />

                </Switch>


        )
    }
};

export default Routes;