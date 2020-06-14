import React, { Component } from 'react'


class LoginForm extends Component{
    render() {
        return (
            <div>
                <section className="section_five">
                <div className="items">
                <form action="" method="post">
                <input type="text" name="contact" placeholder="CONTACT" id="" required />
                <input type="password" name="password" placeholder="PASSWORD" id="" required />
                <p><a href=" ">lost password?</a></p>
                </form>
                <div className="divider"></div>
                <button type="submit"> {'>'} </button>
                </div>
                </section>
            </div>
        )
    }
}


export {LoginForm}