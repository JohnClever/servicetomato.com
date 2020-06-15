import React, { Component } from 'react'

export default class signup_form extends Component {
    render() {
        return (
            <div className="sign-Input">
                <div className="row center-Input">
                    <div className="input-field col s12">
                    <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                    </div>
                </div>    
            </div>
        )
    }
}
