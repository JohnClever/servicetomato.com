import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import logo from '../components/img/SERVICE TOMATO LOGO.jpg'

class Navbar extends Component{
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo center"><img src={logo} alt= "logo" width="15%"/></a>
                    <ul className="left">
                        <li><a href="/">Servicetomato.com</a></li>
                    </ul>
                    <ul className="right">
                        <li className="nav-menu"><a href="/">. . .</a></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export {Navbar}