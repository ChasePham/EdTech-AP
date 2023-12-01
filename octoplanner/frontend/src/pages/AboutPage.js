import NavBar from "../components/NavBar";

const AboutPage = () => {
    return (
        <div>
            <NavBar curPage = "about"/>
            <h1>About Page</h1>
            <p>
                This project was created by a goated team of 8 as part of Texas Convergent EdTech.
            </p>
            <br/>
            <div>Tech: </div>
            <ul>
                <li>Chase Pham</li>
                <li>Barnett Han</li>
                <li>Taylor Hickman</li>
                <li>Druthi Palle</li>
            </ul>
            <div>Product: </div>
            <ul>
                <li>Brandy Xie</li>
                <li>Aayushi Dumka</li>
                <li>Aulona Ljena</li>
            </ul>
            <div>Design: </div>
            <ul>
                <li>Erin Walters</li>
            </ul>
            <br/>
            <p>Octomize was designed with the intention of making students' lives easier by 
                automating the creation of study schedules with just a few clicks</p>
        </div>
    );
};
  
export default AboutPage;