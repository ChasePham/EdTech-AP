import NavBar from "../components/NavBar";
import Calendar from "react-calendar";

const CalendarPage = () => {
    return (
        <div>
            <NavBar/>
            {/* <div style={{width: '100%', height: '100%', position: 'relative'}}>
    <div style={{width: 891.77, height: 597.45, left: 49.23, top: 31.79, position: 'absolute', background: 'white', border: '1px #BDBDBD solid'}} />
    <div style={{width: 26.94, height: 25.24, left: 88.25, top: 0, position: 'absolute', textAlign: 'center', color: '#3A3A3A', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>M</div>
    <div style={{width: 26.94, height: 25.24, left: 223.87, top: 0, position: 'absolute', textAlign: 'center', color: '#3A3A3A', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>T</div>
    <div style={{width: 26.94, height: 25.24, left: 359.49, top: 0, position: 'absolute', textAlign: 'center', color: '#3A3A3A', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>W</div>
    <div style={{width: 26.94, height: 25.24, left: 495.12, top: 0, position: 'absolute', textAlign: 'center', color: '#3A3A3A', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Th</div>
    <div style={{width: 26.94, height: 25.24, left: 630.74, top: 0, position: 'absolute', textAlign: 'center', color: '#3A3A3A', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>F</div>
    <div style={{width: 26.94, height: 25.24, left: 766.36, top: 0, position: 'absolute', textAlign: 'center', color: '#3A3A3A', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Sa</div>
    <div style={{width: 26.94, height: 25.24, left: 901.99, top: 0, position: 'absolute', textAlign: 'center', color: '#3A3A3A', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Su</div>
    <div style={{width: 87.32, height: 35.53, left: 1.86, top: 14.02, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>06:00</div>
    <div style={{width: 87.32, height: 37.40, left: 0, top: 50.49, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>07:00</div>
    <div style={{width: 87.32, height: 35.53, left: 0, top: 89.76, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>08:00</div>
    <div style={{width: 87.32, height: 37.40, left: 1.86, top: 124.35, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>09:00</div>
    <div style={{width: 87.32, height: 35.53, left: 0, top: 160.82, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>10:00</div>
    <div style={{width: 87.32, height: 36.46, left: 0, top: 200.08, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>11:00</div>
    <div style={{width: 87.32, height: 36.46, left: 1.86, top: 237.48, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>12:00</div>
    <div style={{width: 87.32, height: 36.46, left: 1.86, top: 274.88, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>01:00</div>
    <div style={{width: 87.32, height: 36.46, left: 1.86, top: 312.28, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>02:00</div>
    <div style={{width: 87.32, height: 36.46, left: 1.86, top: 348.74, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>03:00</div>
    <div style={{width: 87.32, height: 36.46, left: 0, top: 387.08, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>04:00</div>
    <div style={{width: 87.32, height: 36.46, left: 0, top: 423.54, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>05:00</div>
    <div style={{width: 87.32, height: 35.53, left: 0, top: 462.81, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>06:00</div>
    <div style={{width: 87.32, height: 37.40, left: 1.86, top: 498.34, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>07:00</div>
    <div style={{width: 87.32, height: 35.53, left: 1.86, top: 536.67, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>08:00</div>
    <div style={{width: 87.32, height: 37.40, left: 1.86, top: 572.20, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>09:00</div>
    <div style={{width: 87.32, height: 35.53, left: 0.93, top: 611.47, position: 'absolute', color: '#3A3A3A', fontSize: 17, fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word'}}>10:00</div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 69.19, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 31.79, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 106.59, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 143.99, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 181.38, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 218.78, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 256.18, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 293.58, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 330.98, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 368.38, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 405.78, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 443.18, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 480.58, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 517.97, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 555.37, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
    <div style={{width: 891.77, height: 0, left: 49.23, top: 592.77, position: 'absolute', border: '1px #B5B0B0 solid'}}></div>
</div> */}
        <Calendar/>
        </div>
    );
};
  
export default CalendarPage;