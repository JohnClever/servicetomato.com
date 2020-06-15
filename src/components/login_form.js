import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import Button from './button'
import { Link } from 'react-router-dom'

class LoginForm extends Component{
   
     render() {
        return (
            <div >
                <div className="form-Input">
                    <div className="row center-Input">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" placeholder="PASSWORD"/>
                        </div>  
                        <div className="input-field col s12">
                            <input  id="contact" type="number" className="validate" placeholder="CONTACT"/>
                        </div> 
                    </div>
                    <Link to= "/">lost password?</Link>
                </div>
                <Button />
            </div>
            
              
        )
    }
}


export {LoginForm}