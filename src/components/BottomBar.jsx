import Icon from "./Icon.jsx";
import { Link } from "react-router-dom";

function BottomBar() {
    return (
        <div className="bottombar">
            <div className="bottombar-side">
                <div className="bottombar-ac">
                    <span className="bottombar-temp">
                        21°C
                    </span>
                    <span className="bottombar-icon" style={{transform:"scaleX(-1)"}}>
                        <Icon size="100%" name="seat"/>
                    </span>
                </div>
                <div className="bottombar-control">
                    <span className="bottombar-icon">
                        <Icon size="100%" name="windshield1"/>
                    </span>
                    <span className="bottombar-icon">
                        <Icon size="100%" name="windshield2"/>
                    </span>
                    <span className="bottombar-icon"> 
                        <Icon size="100%" name="acloop"/>
                    </span>
                    <span className="bottombar-icon">
                        <Icon size="100%" name="fan"/>
                    </span>
                </div>
            </div>
            <div className="bottombar-middle">
                <div>
                    <Link to="/">
                        <span className="bottombar-home">
                            <Icon size="100%" name="home" />     
                        </span>
                    </Link>
                </div>
            </div>
            <div className="bottombar-side">
            
                <div className="bottombar-control">
                    <span className="bottombar-icon">
                        <Icon size="100%" name="grid"/>
                    </span>
                    <span className="bottombar-icon">
                        <Icon size="100%" name="car"/>
                    </span>
                    <Link to="/music">
                        <span className="bottombar-icon">
                            <Icon size="100%" name="music"/>
                        </span>
                    </Link>
                    <Link to="/navigation">
                        <span className="bottombar-icon">
                            <Icon size="100%" name="location"/>
                        </span>
                    </Link>
                    <span className="bottombar-icon">
                        <Icon size="100%" name="globe"/>
                    </span>
                </div>
                <div className="bottombar-ac">
                    <span className="bottombar-icon">
                        <Icon size="100%" name="seat"/>
                    </span>
                    <span className="bottombar-temp">
                        21°C
                    </span>
                </div>
            </div>
        </div>
    )
};

export default BottomBar;