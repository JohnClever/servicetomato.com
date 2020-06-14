import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize'
import Button from './button'

class LoginForm extends Component{
   
     render() {
        return (
            <div >
                <div className="form-Input">
                    <div className="row center-Input">
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">PASSWORD</label>
                        </div>  
                        <div className="input-field col s12">
                            <input  id="contact" type="number" className="validate" />
                            <label  htmlFor="contact">CONTACT</label>
                        </div> 
                    </div>
                    <a href = "/ ">lost password?</a>
                </div>
                <Button />
            </div>
            
              
        )
    }
}


export {LoginForm}