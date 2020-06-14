import React, { Component } from 'react'
import logo from './img'

class Navbar extends Component{
    render() {
        return (
            <div>
                <header>
                    <div class="navbar">
                        <div class="logo">              
                            <img src="logo" alt="logo" />
                        </div>
                        <a href="/"><p class="p1">servicetomato.com</p></a>
                        <a href="/"class="p2" ><p >...</p></a>
                    </div>   
                </header>
            </div>
        )
    }
}

export {Navbar}