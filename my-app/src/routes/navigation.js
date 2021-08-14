import React,{Component} from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Login from '../pages/authentication/login';
import Welcome from '../pages/welcome/welcome';
import '../App.css'
export default class  Routes extends Component {
    render(){
        return(
            <BrowserRouter>
            
            
            <Switch>
                <Route exact path='/' component={Welcome}></Route>   
                <Route exact path='/login' component={Login}  ></Route>
                <Route path="*" component={Welcome}></Route>

            </Switch>
            </BrowserRouter>
            
                
                
             
        )
    }


}