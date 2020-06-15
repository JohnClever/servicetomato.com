import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class AfterLogIn extends Component {
    render() {
        return (
            <div className="AfterLogIn">
                <div className="items">
                    <ul>
                        <li><Link to="/">POST A SERVICE</Link></li>
                        <li><Link to="/">POST A JOB</Link></li>
                    </ul>
                    <div className="divider"></div>
                    <p><Link to="/">Share a story</Link></p>
                </div>
                <p className="log_out"><Link to="/">Logout</Link></p>
            </div>
        )
    }
}
