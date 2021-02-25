import './App.css';
import "./style.css";
import im from './imageInSrc.jpg';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <div style = {{border:'solid 1px black', maxWidth:'100' }}>
        <h1 className = "title red"> BEN DHIAB IMEN </h1>
        <br></br>
        <img style={{width:"10%"}} src = {im} alt="ff"/>
        <br></br>
        <img style={{width:"10%"}} src="/imageInPublic.jpg" alt="zzz"/>
      </div>
      
        <ReactPlayer width='320px' height='240px'controls url='https://youtu.be/gSVrIqKxDEE?t=125'/>
      
    </div>

  );
}
export default App;