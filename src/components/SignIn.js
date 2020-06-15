import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'

class SignIn extends Component {
    render() {
        return (
            <div className="signIn">
                 <div className="items">
                    <p>SIGN IN</p>
                    <Link to="/menu/SignIn/login" className="waves-effect button-style waves-light btn">{'WELCOME BACK'}</Link>
                </div>
            </div>
        )
    }
}

export default SignIn