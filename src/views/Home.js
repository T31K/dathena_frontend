import {useEffect, useState} from 'react'
// import Particles from 'react-particles-js';

// import data from "../utils/particlesconfig.json"
import "../App.css"

import axios from 'axios';

function Home() {
  const [user, setUser] = useState([])
  const url = "http://localhost:8000/user/"
  
  useEffect(() => {
   axios.get(url)
     .then(res => {
       const users = res.data
       setUser(users)
     })
  }, [])
  

  return (
    <div className="App">
      {/* <Particles params={data} className="abs"/> */}
      <div className="home">
        <h1>hello</h1>
        
        {user.map(user => (
          <div key={user.id}>
            <p>{user.firstName} {user.lastName} </p>
          </div>
        ))
        }
        
      </div>
    </div>
  );
}

export default Home;