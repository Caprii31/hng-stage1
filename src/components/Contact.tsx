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
                <div className="first__name">
                    <label htmlFor="">first name</label>
                    <input type="text" className="input__name" placeholder="Enter Your First Name" />
                </div>
                <div className="second__name">
                    <label htmlFor="">second name</label>
                    <input type="text" className="input__name" placeholder="Enter Your Second Name" />
                </div> 
            </div>
            <div className="form__email">
                    <label htmlFor="">email</label>
                    <input type="email" className="email" placeholder="Yourname@email.com"/>
            </div>
            
            <div className="form__message">
                    <label htmlFor="">message</label>
                    <textarea placeholder="Send me and i'll reply as soon as possible..."  />
            </div>
            <div className="form__radio">
                    <input type="radio" className="radio" />
                    <label htmlFor="">You agree to providing your data to Ahmed who may contact you. </label>
            </div>
            <button className="form__btn">send message</button>
    </form>
    </>
  )
}

export default Contact