import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import logo from '../components/img/SERVICE TOMATO LOGO.jpg'


class Navbar extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <li><a href="/" className="brand-logo nav-link left">Servicetomato.com</a></li>
                    <a href="/" className="brand-logo center"><img src={logo} alt= "logo" width="15%"/></a>
                    <a href="/" className="brand-logo nav-menu right">. . .</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export {Navbar}