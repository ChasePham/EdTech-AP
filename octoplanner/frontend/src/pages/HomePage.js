import logo from '../logo.svg';
import '../App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import {db,auth} from "./Firebase"
function HomePage() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/login"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default HomePage;
