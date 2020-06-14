import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="items">
                    <ul>
                        <li><a href="/">JOIN</a></li>
                        <li><a href="/">SIGN IN</a></li>
                        <li><a href="/">POST A SERVICE</a></li>
                        <li><a href="/">POST A JOB</a></li>
                    </ul>
                    <hr />
                    <p><a href="/">Share a story</a></p>
                </div>
            </div>
        )
    }
}

export default Menu
