import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import TourScreen from "./pages/TourScreen";
import Tours from "./pages/Tours";
import moon from './assets/MoonVideo.mp4';
import {useAudio} from "react-awesome-audio";
import music from "./assets/music.mp3";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

    const { isPlaying, play, toggle } = useAudio({
        src: music,
        loop: true,
        volume: 0.7
    });

    return (
    <Router>
        <video id="background-video" loop autoPlay muted
               style={{
                   position: "absolute",
                   width: "100%",
                   left: "50%",
                   top: "50%",
                   height: "100%",
                   objectFit: "cover",
                   transform: "translate(-50%, -50%)",
                   zIndex: "-1"
               }}>
            <source src={moon} type="video/mp4" />
        </video>
      <Navigation click={() => setSideToggle(true)}/>
      <main className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={TourScreen} />
          <Route exact path="/cart" component={Tours} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
