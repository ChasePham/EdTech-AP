import { Outlet, Link } from "react-router-dom";
import {db,auth} from "./Firebase"
import { GoogleAuthProvider ,signInWithPopup} from "firebase/auth";

const LoginPage = () => {

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();;
        signInWithPopup(auth,provider);
    }
    return (
        <div>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
        </div>
    );
};
  
export default LoginPage;