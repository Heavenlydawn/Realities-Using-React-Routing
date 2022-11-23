import React from 'react'
import './index.css'
import rot1 from './images/rot1.jpg'
import rot2 from './images/img1.jpg'
const Index = () => {
  return (
    <div>

    <div className='rot-container'>
    <div className="rot-section">
        <div className="rotImg">
          <img alt="Dog" src={rot1} />
        </div>
        <div className="rotImg">
          <img id="dog" alt="Dog" src={rot2} />
        </div>
      </div>




       <div className="sign-in-form">
        <div className="sign-in-content">
          <form>
            <label>First Name</label>
            <br />
            <input id="fName" type="text" />
            <br />

            <label>Last Name</label>
            <br />
            <input id="lName" type="text" />

            <label>Email</label>
            <br />
            <input id="email" type="email" />


            <label>Password</label>
            <br />
            <input id="password" type="password" />

            <button className="btn">Sign-Up</button>
          </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Index
