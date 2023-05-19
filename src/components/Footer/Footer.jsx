import React from 'react'
import '../../styles/footer.css'
import Instagram from './Instagram'
import Facebook from './Facebook'
import Twitter from './Twitter'
import History from './History'
import Style from './Style'
import WebSite from './Website'
import Contact from './Contact'

const Footer = () => {
  return (
    <div className='footContainer'>
      <div className='section1'>
        <History href="https://www.nationalgeographic.com/culture/article/sneaker-culture-sneakerheads-air-jordans-history-expression" target="_blank" content="Check the history of the sneakers" />
        <Style href="https://www.complex.com/sneakers/2014/12/style-tips-for-sneakerheads" target="_blank" content="Improve your style here" />
      </div>
      <div>
        <Instagram href="https://www.instagram.com/footlockereu/" target="_blank" content="Instagram" />
        <Twitter href="https://twitter.com/footlocker" target="_blank" content="Twitter" />
        <Facebook href="https://www.facebook.com/footlockerwomen" target="_blank" content="Facebook" />
      </div>
      <div>
        <WebSite href="https://www.footlocker.com/" target="_blank" content="Check out our website" />
        <Contact href="https://help.footlocker.com/hc/en-us" target="_blank" content="Contact us here!" />
      </div>
    </div>
  )
}

export default Footer;