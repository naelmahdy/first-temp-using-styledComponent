
import React, { Component } from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Profile from '../Profile/Profile'
import SocialMedia from '../SocialMedia/SocialMedia'
import Work from '../Work/Work'
class Index extends Component {

  render() {
    return (
      <div>
        <Home />
        <Work />
        <Portfolio />
        <Profile />
        <About />
        <SocialMedia />
        <Footer />
      </div>
    )
  }
}
export default Index