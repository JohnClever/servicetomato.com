import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import logo from '../components/img/SERVICE TOMATO LOGO.jpg'
import logoMenu from '../components/img/icon_menu.svg'

class Navbar extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <li><a href="/" className="brand-logo nav-menu left">Servicetomato.com</a></li>
                    <a href="/" className="brand-logo center"><img src={logo} alt= "logo" width="15%"/></a>
                    <a href="/" className="brand-logo right"><img src={logoMenu} alt="logoMenu"/></a>
                    </div>
                </nav>
            </div>
        )
    }
}

export {Navbar}