import NavBar from "../components/NavBar";
import Calendar from "react-calendar";
import img from "../images/realInput.jpg";

const CalendarPage = () => {
    return (
        <div>
            <NavBar/>
            <img style={{width: "80%"}} src = {img}/>
        </div>
    );
};
  
export default CalendarPage;