import '../css/App.css';
import { NavLink } from 'react-router-dom';
import NavBar from '../components/NavBar';
import octopus1 from '../images/octopus1.png';
import '../css/HomePage.css';
import schedule from '../images/readySchedule.jpg';


function HomePage() {
  return (
    <div>
      <NavBar curPage="home"/>
    {/* <div className="text">
        Enjoy studying, {localStorage.name}!

    </div> */}
      <input className="check" type="checkbox"/>
      <img style={{width: "80%"}}src={schedule}/>
    </div>
  );
}

export default HomePage;
