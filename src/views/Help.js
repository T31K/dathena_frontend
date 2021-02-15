import { useState } from 'react'
import { withRouter } from 'react-router-dom'

import Navbar from '../components/Navbar'

import "../App.css"

import { Card } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

const Help = ({history, props}) => {
  const [selected] = useState([])
  return (
    <div className="main">
      <Navbar selection={selected} />
      <Card className="error-card text-center">
        <div>
          <FontAwesomeIcon icon={faInfoCircle} className="error" />
          <h3 className="mt-5">Info</h3>
          <h4 className="mt-5">Thank you Dathena Team for giving me this opportunity, I had an awesome time creating this project. Client SPA was bootstrapped using Create-React-App and I created a mock server using Django REST framework. I've also committed my work to document my progress on Github.</h4>
          <h5 className="mt-4"><a href="https://api.whatsapp.com/send?phone=+6588669056&text=Hi%20congrats!"><FontAwesomeIcon icon={faWhatsappSquare} className=""/> +6588669056</a></h5>
          <h5 className="mt-4"><a href="https://github.com/T31K"><FontAwesomeIcon icon={faGithub} className=""/> github.com/T31K</a></h5>
          <h5 className="mt-4"><a href="mailto:t31kmunwong@gmail.com"><FontAwesomeIcon icon={faEnvelope} className=""/> t31kmunwong@gmail.com</a></h5>
          <h5 className="mt-4"><a href="https://linkedin.com/in/teikmunwong/"><FontAwesomeIcon icon={faLinkedin} className=""/> linkedin.com/in/teikmunwong</a></h5>
        </div>
      </Card>
    </div>
  )
}

export default withRouter(Help)
