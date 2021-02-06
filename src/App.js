import Particles from 'react-particles-js';
import data from "./particlesconfig.json"

function App() {
  return (
    <div className="App">
    <h1>hello</h1>
    <Particles params={data}/>
    </div>
  );
}

export default App;
