import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class JoinSite extends Component {
    render() {
        return (
            <div className="JoinSite">
                <div className="items">
                <p>JOIN</p>
                <Link to="/menu/join/signup"> <button type="submit">Get a servicetomato account</button></Link>
                <p id="create_account"><Link to="/">Already have an account?</Link></p>
            </div>
                <div className="divider"></div>
                <p id="sign_up"><Link to="/menu/join/signin">sign in</Link></p>
            </div>
        )
    }
}
