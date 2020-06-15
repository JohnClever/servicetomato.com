import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class AfterSignUp extends Component {
    render() {
        return (
            <div className="AfterSignUp">
                <div className="items">
                    <ul>
                        <li><Link to="/" id="prof">MY PROFILE</Link></li>
                        <li><Link to="/">ADD SERVICE</Link></li>
                        <li><Link to="/" id="job">POST A JOB</Link></li>
                    </ul>
                    <hr />
                    <p><Link to="/">Share a story</Link></p>
                </div>
                <p className="log_out"><Link to="/">Logout</Link></p>
            </div>
        )
    }
}
