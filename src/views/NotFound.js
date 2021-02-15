import { useState } from 'react'
import { withRouter } from 'react-router-dom'

import Navbar from '../components/Navbar'

import "../App.css"

import { Card } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const NotFound = ({history, props}) => {
  const [selected] = useState([])

  return (
    <div className="main">
      <Navbar selection={selected} />
      <Card className="error-card">
        <div>
          <FontAwesomeIcon icon={faExclamationTriangle} className="error" />
          <h3 className="text-center mt-5">Page not found</h3>
          <h5 className="text-center mt-2">Please refresh</h5>

        </div>
      </Card>
    </div>
  )
}

export default withRouter(NotFound)