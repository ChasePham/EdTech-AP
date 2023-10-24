
import vector from '../images/Vector.svg';
import line38 from '../images/Line 38.svg';
import star1 from '../images/Star 1.svg';
import star2 from '../images/Star 2.svg';
import star3 from '../images/Star 3.svg';
import star4 from '../images/Star 4.svg';
import '../css/App.css';
import { db, auth } from "../api/Firebase"
import NavBar from '../components/NavBar';
import Calendar from '../images/calendar.jpg'

function WelcomePage() {
  return (
    <div>
      <NavBar/>
      <div className="welcome">
        <div className="div">
          <div className="overlap">
            <div className="rectangle" />
            <div className="ellipse" />
            <div className="motivational">
              get your grades
              <br /> up!
            </div>
            <img className="vector" alt="Vector" src={vector} />
            <img className="line" alt="Line" src={line38} />
          </div>
          <div className="overlap-group">
            <div className="overlap-2">
              <div className="overlap-3">
                <div className="ellipse-2" />
                <p className="generate-a-smart">
                  Generate a smart <br />
                  study schedule
                </p>
              </div>
              <div className="overlap-5">
                <div className="ellipse-4" />
                <div className="ellipse-5" />
                <div className="ellipse-6" />
                <img className="calendar" src={Calendar}/>
              </div>
              <img className="star-3" alt="Star" src={star3} />
              <a href="/login">
                <div className="overlap-group-wrapper">
                  <div className="div-wrapper">
                    <div className="text-wrapper-7">Join Now →</div>
                  </div>
                </div>
              </a>
            </div>
            <img className="star-1" alt="Star" src={star1} />
            <img className="star-2" alt="Star" src={star2} />
            <img className="star-4" alt="Star" src={star4} />
            <a href="/login">
              <div className="overlap-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-7">Sign in →</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
