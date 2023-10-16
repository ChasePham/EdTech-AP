import logo from '../images/logo.svg';
import '../css/App.css';

import {db,auth} from "./Firebase"


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Octoplanner.
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
