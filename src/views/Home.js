import {useEffect} from 'react'
// import Particles from 'react-particles-js';

// import data from "../utils/particlesconfig.json"
import "../App.css"

import axios from 'axios';

function Home() {
  const url = "http://localhost:8000/user/"
  useEffect(() => {
   axios.get(url)
     .then(res => console.log(res.data))
  })

  return (
    <div className="App">
      {/* <Particles params={data} className="abs"/> */}
      <div className="home">
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default Home;