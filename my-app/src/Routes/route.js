import React,{Component} from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Login from '../Authentication/login';
export default class  Routes extends Component {
    render(){
        return(
            <Router>
                 <div>
                <Route path='/' component={Login}/>

            </div>

            </Router>
           
           

          
            
           
        )
    }


}