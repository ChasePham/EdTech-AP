import { Outlet, Link, useNavigate } from "react-router-dom";
import {db,auth} from "../api/Firebase"
import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import '../css/LoginPage.css';
import GoogleLogo from '../images/google.png';
import NavBar from "../components/NavBar";
import Background from "../images/background.png"
import StarFour from "../images/star-four.svg"

const LoginPage = () => {

    const navigate = new useNavigate();

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();;
        signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
            navigate("/home");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div>
          <NavBar curPage="login"/>

          <div className="box">
            <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/guPWySyQ/img/rectangle-2.png" />
          </div>
      
          <div className="label">
            <div className="log-in">log in to octomize.</div>
          </div>
      
          <div className="email-box">
            <div className="rectangle" />
          </div>
          <div className="email-label">
            <div className="text-wrapper">EMAIL ADDRESS</div>
          </div>
          <div className="email-enter">
            <input type="text" name="uname" required></input>
          </div>
          

          <div className="pwd-box">
            <div className="rectangle" />
          </div>
          <div className="pwd-label">
            <div className="text-wrapper">PASSWORD</div>
          </div>
          <div className="pwd-enter">
            <input type="password" name="psw" required></input>
          </div>

          <div className="rememberme-check">
            <input type="checkbox" value="lsRememberMe" id="rememberMe" />
          </div>

          <div className="rememberme">
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <div className="forgot-pwd">
            <label htmlFor="forgotpwd">Forgot Password?</label>
          </div>

          <div class="sign-in-button">
            <button class = "login-button" type="submit">Sign In</button>
          </div>

          <div className="oruse">
            <div className="text-wrapper">OR USE</div>
          </div>

          <div class="google-button-container">
            <img class="google-logo-button" onClick={signInWithGoogle} src={GoogleLogo} alt="Google Logo"/>
          </div>

          <div class="background-login">
            <img class="background" alt="Background Image" src={Background}/>
          </div>

          <div className="star">
            <img className="star-one" alt="Star" src={StarFour}/>
            <img className="star-two" alt="Star" src={StarFour}/>
            <img className="star-three" alt="Star" src={StarFour}/>
          </div>


        </div>
    );  
};
  
export default LoginPage;
