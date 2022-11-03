import React from 'react'

function Contact() {
  return (
    <form action="" className="contact">
        <div className="contact__header">
            <h2 className="contact__title">contact me</h2>
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
            <div className="form__email">
                <label htmlFor="">email</label>
                <input type="email" className="email" placeholder="Yourname@email.com"/>
            </div>
            <div className="form__message">
                <label htmlFor="">message</label>
                <input type="textarea" className="textarea" placeholder="Send me and i'll reply as soon as possible" />
            </div>
            <div className="form__radio">
                <input type="radio" className="radio" />
            </div>
        </div>
    </form>
  )
}

export default Contact