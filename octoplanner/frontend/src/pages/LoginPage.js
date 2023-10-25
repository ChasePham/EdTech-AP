import { Outlet, Link, useNavigate } from "react-router-dom";
import {db,auth} from "../api/Firebase"
import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import '../css/LoginPage.css';
import GoogleLogo from '../images/google.png';
import NavBar from "../components/NavBar";

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
            <NavBar/>
            <div class="login-box">
                <div class="login">
                    <h2>log in to octomize.</h2>
                </div>
                <div class="container">
                    <label for="uname"><b>Email Address</b></label>
                    <input type="text" placeholder="Enter Email Address" name="uname" required></input>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required></input>
                
                    <label>
                        <input type="checkbox" name="remember"></input> Remember me
                    </label>
                    
                    <span class="psw"><a href="#">Forgot Password?</a></span>

                    <label class="sign-in-button">
                        <button class = "login-button" type="submit">Sign In</button>
                    </label>
                </div>

                <div class="google-button-container">
                    <label>OR USE</label>
                    <img class="google-logo-button" onClick={signInWithGoogle} src={GoogleLogo} alt="Google Logo"/>
                </div>
            </div>
        </div>
    );
};
  
export default LoginPage;
