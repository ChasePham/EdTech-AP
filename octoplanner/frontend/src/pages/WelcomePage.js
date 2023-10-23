import logo from '../images/logo.svg';
import vector from '../images/Vector.svg';
import line38 from '../images/Line 38.svg';
import star1 from '../images/Star 1.svg';
import star2 from '../images/Star 2.svg';
import star3 from '../images/Star 3.svg';
import star4 from '../images/Star 4.svg';
import '../css/App.css';
import { db, auth } from "../api/Firebase"


function WelcomePage() {
  return (
    <div className="welcome">
      <div className="div">
        <div className="overlap">
          <div className="rectangle" />
          <div className="ellipse" />
          <div className="motivational">
            motivational statement
            <br /> here
          </div>
          <div className="check-all" />
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
            <div className="overlap-4">
              <div className="ellipse-3" />
              <div className="text-wrapper">octomize.</div>
              <div className="text-wrapper-2">My Account</div>
              <div className="rectangle-2" />
              <div className="group">
                <div className="group-2">
                  <div className="text-wrapper-3">Home</div>
                  <div className="text-wrapper-4">Generate</div>
                  <div className="text-wrapper-5">Octo</div>
                  <div className="text-wrapper-6">About</div>
                </div>
              </div>
            </div>
            <div className="overlap-5">
              <div className="ellipse-4" />
              <div className="ellipse-5" />
              <div className="ellipse-6" />
            </div>
            <img className="star-3" alt="Star" src={star3} />
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <div className="text-wrapper-7">Join Now --&gt;</div>
              </div>
            </div>
          </div>
          <img className="star-1" alt="Star" src={star1} />
          <img className="star-2" alt="Star" src={star2} />
          <img className="star-4" alt="Star" src={star4} />
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-7">Sign in --&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
