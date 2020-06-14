import React, { Component } from 'react'


class LoginForm extends Component{
    render() {
        return (
            <div>
            <form action="" method="post">
              <input type="text" name="contact" placeholder="CONTACT" id="" required />
              <input type="password" name="password" placeholder="PASSWORD" id="" required />
              <p><a href=" ">lost password?</a></p>
          </form>
            </div>
        )
    }
}


export {LoginForm}