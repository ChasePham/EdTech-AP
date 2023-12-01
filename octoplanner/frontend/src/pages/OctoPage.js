
import octopusMascot from '../images/OctopusMascot.png';
import hat from '../images/hat.png';
import magicianHat from '../images/magician hat.png';
import wideHat from '../images/wide brimmed hat.png';
import smallHat from '../images/small hat.png';
import witchHat from '../images/witch hat.png';
import ladyHat from '../images/lady hat.png';
import Ellipse1 from '../images/Ellipse 1 Game.svg';
import bubbles from '../images/bubbles.png';
import myAccount from '../images/My Account.svg';
import rectangle27 from '../images/Rectangle 27.svg';
import rectangle27Box from '../images/Rectangle 27 Box.svg';
import rectangle28Box from '../images/Rectangle 28 Box.svg';
import rectangle29Box from '../images/Rectangle 29 Box.svg';
import check from '../images/Check.svg';
import rectangle21 from '../images/Rectangle 21.svg';
import rectangle21Box from '../images/Rectangle 21 Box.svg';
import rectangle22 from '../images/Rectangle 22.svg';
import rectangle22Box from '../images/Rectangle 22 Box.svg';
import rectangle23 from '../images/Rectangle 23.svg';
import rectangle23Box from '../images/Rectangle 23 Box.svg';
import livingRoom from '../images/Living room background.png';
import line51 from '../images/Line 51.png';
import rectangle from '../images/Rectangle.png';
import rectangle2Box from '../images/Rectangle 2 Box.png';
import rectangle20 from '../images/Rectangle 20.png';
import rectangle20Box from '../images/Rectangle 20 Box.png';
import line45 from '../images/Line 45.png';
import line46 from '../images/Line 46.png';
import line47 from '../images/Line 47.png';
import line48 from '../images/Line 48.png';
import line49 from '../images/Line 49.png';
import line56 from '../images/Line 56.png';
import line52 from '../images/Line 52.png';
import line53 from '../images/Line 53.png';
import line54 from '../images/Line 54.png';
import line55 from '../images/Line 55.png';
import heart from '../images/Heart.png';
import NavBar from '../components/NavBar';

import '../css/Gamification.css';
import { db, auth } from "../api/Firebase";
import Calendar from '../images/calendar.jpg';


function OctoPage() {
  return (
    <div>
        <NavBar curPage="octo"/>
    <div className="cute-gamification">
    <div className="div">
      <div className="overlap">
        <div className="rectangle" />
        <img className="img" alt="Rectangle" src={rectangle27} />
        <img className="img" alt="Rectangle stroke" src={rectangle27Box} />
        <img className="rectangle-stroke" alt="Rectangle stroke" src={rectangle28Box} />
        <img className="rectangle-stroke-2" alt="Rectangle stroke" src={rectangle29Box} />
        <img className="rectangle-stroke-3" alt="Rectangle stroke" src={rectangle29Box} />
        <img className="rectangle-stroke-4" alt="Rectangle stroke" src={rectangle29Box} />
        <img className="rectangle-stroke-5" alt="Rectangle stroke" src={rectangle29Box} />
        <img className="vector" alt="Vector" src={check} />
        <div className="study-for-psychology">Study for psychology 2:30-4:00</div>
        <div className="text-wrapper">daily tasks</div>
        <div className="rectangle-2" />
        <img className="line" alt="Line" src={line49} />
        <img className="line-2" alt="Line" src={line51} />
        <img className="line-3" alt="Line" src={line52} />
        <img className="line-4" alt="Line" src={line53} />
        <img className="line-5" alt="Line" src={line54} />
        <img className="line-6" alt="Line" src={line55} />
        <img className="line-7" alt="Line" src={line56} />
      </div>
      <div className="overlap-group">
        <div className="rectangle-3" />
        <div className="text-wrapper-2">Store</div>
        <img className="witch-hat" alt="Witch hat" src={witchHat} />
        <img className="lady-s-hat" alt="Lady s hat" src={ladyHat}/>
        <img className="hat" alt="Hat" src={hat} />
        <img className="wide-brimmed-hat" alt="Wide brimmed hat" src={wideHat} />
        <img className="magician-hat" alt="Magician hat" src={magicianHat} />
        <img className="hat-2" alt="Hat" src={smallHat} />
        <img className="line-8" alt="Line" src={line45} />
        <img className="line-9" alt="Line" src={line46} />
        <img className="line-10" alt="Line" src={line47}/>
        <img className="line-11" alt="Line" src={line48} />
        <div className="rectangle-4" />
        <img className="line-12" alt="Line" src={line56} />
      </div>
      
      <div className="ellipse-2" />
      <div className="overlap-3">
        <div className="rectangle-6" />
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle-7" />
            <div className="text-wrapper-8">Good luck studying!</div>
          </div>
        </div>
        <img className="living-room" alt="Living room" src={livingRoom} />
        <img className="element-octo-pie-pastries" alt="Element octo pie pastries" src={octopusMascot} />
      </div>
      <div className="text-wrapper-9">3 day study streak</div>
      <div className="overlap-4">
        <img className="img-2" alt="Rectangle" src={rectangle20} />
        <img className="img-2" alt="Rectangle stroke" src={rectangle20Box} />
        <img className="img-3" alt="Rectangle" src={rectangle21} />
        <img className="img-3" alt="Rectangle stroke" src={rectangle21Box} />
        <img className="img-4" alt="Rectangle" src={rectangle22} />
        <img className="img-4" alt="Rectangle stroke" src={rectangle22Box} />
        <img className="img-5" alt="Rectangle" src={rectangle23} />
        <img className="img-5" alt="Rectangle stroke" src={rectangle23Box} />
        <img className="group-3" alt="Group" src={heart}/>
      </div>
    </div>
  </div>
    </div>
);
};

export default OctoPage;
