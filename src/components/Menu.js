import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Switch, Route, useParams, useRouteMatch} from 'react-router-dom'
import { LoginForm } from './login_form'

class Menu extends Component {
    render() {  
     
        return (
            <Router>             
            <div className="menu">
                <div className="items">
                    <ul>
                        <li><Link >JOIN</Link></li>
                        <li><Link to="/login">SIGN IN</Link></li>
                        <li><Link >POST A SERVICE</Link></li>
                        <li><Link >POST A JOB</Link></li>
                    </ul>
                    <hr />
                    <p><Link >Share a story</Link></p>
                </div>
            </div>
           
            </Router>
         
        )
    }
};

export default class Menus extends Component {
    render() {
        let {menuId} = useParams()
        return (
            <div>
                {menuId}
            </div>
        )
    }
};


export  {Menu}
