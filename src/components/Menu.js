import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {  
        return (
               
            <div className="menu">
                <div className="items">
                    <ul>
                        <li><Link to="menu/join">JOIN</Link></li>
                        <li><Link to="menu/SignIn">SIGN IN</Link></li>
                        <li><Link >POST A SERVICE</Link></li>
                        <li><Link >POST A JOB</Link></li>
                    </ul>
                    <div className="divider"></div>
                    <p><Link >Share a story</Link></p>
                </div>
            </div>
           
        )
    }
};

export  {Menu}
