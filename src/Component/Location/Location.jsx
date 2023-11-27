import React from 'react'
import './Location.css'
const Location = () => {
  return (
    <section>
        <div className="container">
          <div className="map-info">
            <h2 className='orange-text'>Location..</h2>
            <p className='secon-text'>An easy-to-reach place and not far from the governorate.</p>
          </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20721.6274844654!2d31.15255806782801!3d27.187492387551117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14450bfb7a5cb539%3A0x38d71298729ac58a!2sAssiut%20University!5e1!3m2!1sen!2seg!4v1701017111840!5m2!1sen!2seg" style={{}} width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </section>
  )
}

export default Location;
