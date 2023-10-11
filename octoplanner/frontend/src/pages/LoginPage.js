import { Outlet, Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div>
            <h1>Login to Octoplanner!</h1>
            <a className="App-link"
                href="/calendar"
            rel="noopener noreferrer">Login</a>
        </div>
    );
};
  
export default LoginPage;