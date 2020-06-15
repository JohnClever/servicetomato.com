import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Button extends Component {
    render() {
        return (
            <div>
                <hr />
                <Link to="/servicePage" className="waves-effect button-style waves-light btn">{'>'}</Link>
            </div>
        )
    }
}

export default Button