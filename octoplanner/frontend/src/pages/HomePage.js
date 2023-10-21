import logo from '../images/logo.svg';
import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import octopus1 from '../images/octopus1.png';



function HomePage() {
  return (
    <div>
      <NavBar/>
      <h1>
        Welcome, {localStorage.name}!
      </h1>
      <img src={octopus1} alt = "oct1"/>
    </div>
  );
}

export default HomePage;
