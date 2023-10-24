import { Outlet, Link, useNavigate } from "react-router-dom";
import {db,auth} from "../api/Firebase"
import { GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import '../css/LoginPage.css';
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
            <div className="LoginPrompt">
                <h1 >log in to octomize.</h1>
                <button className="loginButton" onClick={signInWithGoogle}>Sign in with Google</button>
                <p>Do not violate the community guidelines or you will be banned for life!</p>
            </div>
        </div>
    );
};
  
export default LoginPage;