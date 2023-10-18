import logo from '../images/logo.svg';
import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';


function HomePage() {
  
  return (
    <div>
      <NavBar/>
      <h1>
        Welcome, {localStorage.name}!
      </h1>
    </div>
  );
}

export default HomePage;
