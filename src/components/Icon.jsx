import battery from "../assets/svg/battery.svg?raw";
import car from "../assets/svg/car.svg?raw";
import wrench from "../assets/svg/wrench.svg?raw";
import cloud from "../assets/svg/cloud.svg?raw";
import location from "../assets/svg/location.svg?raw";
import plus from "../assets/svg/plus.svg?raw";
import heart from "../assets/svg/heart.svg?raw";
import trackBack from "../assets/svg/trackBack.svg?raw";
import pause from "../assets/svg/pause.svg?raw";
import trackForward from "../assets/svg/trackForward.svg?raw";
import loop from "../assets/svg/loop.svg?raw";
import bluetooth from "../assets/svg/bluetooth.svg?raw";
import wifi from "../assets/svg/wifi.svg?raw";
import acloop from "../assets/svg/acloop.svg?raw";
import fan from "../assets/svg/fan.svg?raw";
import globe from "../assets/svg/globe.svg?raw";
import grid from "../assets/svg/grid.svg?raw";
import music from "../assets/svg/music.svg?raw";
import windshield1 from "../assets/svg/windshield1.svg?raw";
import windshield2 from "../assets/svg/windshield2.svg?raw";
import seat from "../assets/svg/seat.svg?raw";
import home from "../assets/svg/home.svg?raw";
import goStraight from "../assets/svg/goStraight.svg?raw";
import goRight from "../assets/svg/goRight.svg?raw";
import goLeft from "../assets/svg/goLeft.svg?raw";
import search from "../assets/svg/search.svg?raw";



function Icon (props){
    let size = props.size  || "24px";

    let icons = {
        battery,
        car,
        wrench,
        cloud,
        location,
        plus,
        loop,
        trackForward,
        pause,
        trackBack,
        heart,
        bluetooth,
        wifi,
        acloop,
        fan,
        globe,
        grid,
        music,
        windshield1,
        windshield2,
        seat,
        home,
        goStraight,
        goLeft,
        goRight,
        search
    };

    let svg = icons[props.name];

    return (
        <div style={{width:size, height: size, display:"flex", justifyContent:"center", alignItems:"center"}} 
        dangerouslySetInnerHTML={{__html:svg}}></div>
    )
}
export default Icon;