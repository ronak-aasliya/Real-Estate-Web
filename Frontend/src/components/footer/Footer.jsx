import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
          Discover, buy, or sell properties effortlessly with our Node.js and Express-powered app. Engaging React.js front end ensures seamless navigation, while MongoDB manages data. List your property hassle-free and explore a user-friendly platform styled with CSS. Your real estate journey begins here.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +91 12345 67890</span>
          <span>Email: anyone@gmail.com</span>
          <span>GitHub: ronak_aasliya</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: India</span>
          <span>Country: India</span>
          <span>Current Location: Rajasthan</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer