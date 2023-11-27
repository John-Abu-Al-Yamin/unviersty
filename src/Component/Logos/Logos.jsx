import React from 'react'
import './Logos.css'
import logo1 from '../asstes/prologis.png'
import logo2 from '../asstes/equinix.png'
import logo3 from '../asstes/realty.png'
import logo4 from '../asstes/tower.png'

const Logos = () => {
  return (
    <section>
        <div className="logos-container container">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
        </div>
    </section>
  )
}

export default Logos
