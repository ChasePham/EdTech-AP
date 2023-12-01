import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import octopus1 from '../images/octopus1.png';
import '../css/HomePage.css';



function HomePage() {
  return (
    <div>
      <NavBar curPage="home"/>
      <p class="displayset">
        <img class="image" src={octopus1} alt = "oct1"/>
        <h1>
          Welcome, {localStorage.name}!
        </h1>
      </p>
    </div>
  );
}

export default HomePage;
