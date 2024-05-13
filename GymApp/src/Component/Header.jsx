import React from 'react'
import Navbar from './Navbar'
import person from "../assets/person.png"
function Header() {
  return (
    <div className='HeaderClass'>
        <div className="header-div">
            <div className="box">
                <h3> Empowering Your Fitness Journey</h3>
                <h1>FitConnect - Your Ultimate Gym Companion</h1>
                <p>FitConnect revolutionizes your gym experience, offering personalized workouts, expert guidance, and a supportive community right at your fingertips. Track your progress, discover new routines, and stay motivated to achieve your fitness goals with our intuitive app. Unlock your full potential and embrace a healthier, stronger you with FitConnect.</p>
                <button type="button" className="header-btn">Get Started <i className='bx bx-right-arrow-alt'></i></button>
            </div>
            <div className="box" id='box2'>
                <img src={person} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header
