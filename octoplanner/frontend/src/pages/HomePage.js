import logo from '../images/logo.svg';
import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import octopus1 from '../images/octupus1.png';



function HomePage() {
  return (
    <div>
      <NavBar/>
      <h1>
        Welcome, {localStorage.name}!
      </h1>
      {/* <img src={localStorage.profilePic} alt = "oct"/> */}
    </div>
  );
}

export default HomePage;
