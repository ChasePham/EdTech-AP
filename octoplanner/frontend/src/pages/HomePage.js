import logo from '../images/logo.svg';
import '../css/App.css';

function HomePage() {
  
  return (
    <div className="App">
      <nav>
        <h1>Home</h1>
      </nav>
      <header className="App-header">
        Welcome, {localStorage.name}!
      </header>
    </div>
  );
}

export default HomePage;
