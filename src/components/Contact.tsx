import React from 'react'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
        <form action="" className="contact">
            <div className="contact__header">
                <h1>contact me</h1>
                <p className="contact__text">Hi there, contact me to ask anything you have in mind</p>
            </div>
            <div className="form__name">
                <div className="firs">
                    <label htmlFor="">first name</label>
                    <input type="text" className="input__name" placeholder="Enter Your First Name" id="first_name" />
                </div>
                <div className="second__name">
                    <label htmlFor="">second name</label>
                    <input type="text" className="input__name" placeholder="Enter Your Second Name" id="last_name" />
                </div> 
            </div>
            <div className="form__email">
                    <label htmlFor="">email</label>
                    <input type="email" id="email" placeholder="Yourname@email.com"/>
            </div>
            
            <div className="form__message">
                    <label htmlFor="">message</label>
                    <textarea placeholder="Send me and i'll reply as soon as possible..." id="message" />
            </div>
            <div className="form__radio">
                    <input type="checkbox" className="radio" />
                    <label htmlFor="">You agree to providing your data to Ahmed Kamal who may contact you. </label>
            </div>
            <button className="form__btn" id="btn__submit">send message</button>
    </form>
    </>
  )
}

export default Contact