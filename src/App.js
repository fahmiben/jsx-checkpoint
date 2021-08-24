
import './App.css';
import LG from "./imageInSrc.jpg"
function App() {
  return (
    <div className="App">
     <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={LG} alt ='eInSrc' />
          <br />
          <img src="/imageInPublic.jpg" alt='mg2'/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
     


    </div>
  );
}

export default App;
