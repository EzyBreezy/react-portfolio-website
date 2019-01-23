import React, { Component } from 'react';
import './Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="contact-con">
                <h1 className="contact-title"> Contact Me </h1>

                <form action="mailto:ezanab2@gmail.com" method="POST" enctype="text/plain" className="contact-form">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        name="Name" 
                        className="input input-name"
                        />
                    <input 
                        type="email" 
                        placeholder="Email*" 
                        name="my email is" 
                        required 
                        autocomplete="yes" 
                        className="input input-phone"
                        />
                    <input 
                        type="tel" 
                        placeholder="Phone"
                        name="my number is" 
                        autocomplete="yes" 
                        className="input phone" 
                        />
                    <textarea 
                        placeholder="Dont hesitate to shoot me a message!" 
                        className="input input-text" 
                        />
                    <input 
                        type="submit" 
                        value="Submit" 
                        className="input input-submit" 
                        />
                </form>
            </div>
        );
    }
}

export default Contact;