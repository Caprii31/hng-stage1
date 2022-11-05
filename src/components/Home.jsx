import React from 'react'
import profileImg from '../images/profile__img.png'
import github from '../images/Icon.png'
import slack from '../images/icons8-slack-new-48.png'
import avatarShare from '../images/_Avatar share button.png'
import { Link } from 'react-router-dom'
import Footer from './Footer';


function Home() {
  return (
    <>
        <header className="header">
        <img src={profileImg} alt="" id="profile__img" />
        <a href="/" id="twitter">Ahmed Kamal</a>
        <h3 id="slack">ahmedkamal.su31</h3>
        <a href="" className="share"><img src={avatarShare} alt="" className="share__icon" /></a>
      </header>
      <main className="main">
        <a href="https://training.zuri.team/" id="btn__zuri" target="_blank">zuri team</a>
        <a href="http://books.zuri.team" id="books" target="_blank">zuri books</a>
        <a href="https://books.zuri.team/python-for-beginners?ref_id=Caprii" id="book__python" target="_blank">python books</a>
        <a href="https://background.zuri.team" id="pitch" target="_blank">background check for coders</a>
        <a href="https://books.zuri.team/design-rules" id="book__design" target="_blank">design books</a>
        <Link to='/contact' id='contact'>contact me</Link>
        <div className="icon__links">
          <a href="/" className="slack__icon"><img src={slack} alt="" /></a>
          <a href="https://github.com/Caprii31?tab=repositories" className="github__icon"><img src={github} alt="" /></a>
        </div>
      </main>
    </>
  )
}

export default Home