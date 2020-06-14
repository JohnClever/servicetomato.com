import React, { Component } from 'react'


class Navbar extends Component{
    render() {
        return (
            <div>
                <header>
                    <div className="navbar">
                        <div className="logo">              
                            <img src="./img/SERVICE TOMATO LOGO.jpg" alt="logo" />
                        </div>
                        <a href="/"><p className="p1">servicetomato.com</p></a>
                        <a href="/"className="p2" ><p >...</p></a>
                    </div>   
                </header>
            </div>
        )
    }
}

export {Navbar}