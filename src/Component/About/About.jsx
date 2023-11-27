import React from 'react'
import about from '../asstes/about.jpg'
import './About.css'

const About = () => {
  return (
    <section>
      <div className="container about-continer">
        <div className="about-left">
          <div className="image-container">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-title">
          <h3 className='orange-text'>Our Value</h3>
          <h1 className='primary-text'>Value We Give To You</h1>
          <p className='secon-text'>We are Always ready to Help bu providing You With best Services <br/> We belive That a God College can Make Your Life better </p>

          </div>
          <div className="cards">
            <div className="card">
              <h1 className='primary-text'>The best groups in Egypt</h1>
              <p className='secon-text'>Scientific Content is one of the desires That may result Form this:excellence in tje labor market and distinction</p>

              
            </div>
            <div className="card">
              <h1 className='primary-text'>Expenses are nominal Prices</h1>
              <p className='secon-text'>If a Student is found unable To pay the fees, He will be exempted from the expenses</p>
              
            </div>
            {/* <div className="card">
              <h1 className='primary-text'>Best Interest rates on the market</h1>
              <p className='secon-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus autem tenetur nobis harum nemo pariatur earum architecto suscipit blanditiis? Dolorum consectetur fuga quaerat tempore?</p>
              
            </div> */}

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
