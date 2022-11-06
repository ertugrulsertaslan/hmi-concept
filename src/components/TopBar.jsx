import Icon from "./Icon.jsx";

function TopBar() {

    //Render clock
    let date = new Date();
    let hour = String(date.getHours()).padStart(2, '0'); 
    let minute = String(date.getMinutes()).padStart(2, '0'); 


    return (
        <div className="topbar">
            <div className="topbar-clock">
                {hour}:{minute}
            </div>
            <div className="topbar-music-control">
                <span className="song-name">Another Love</span>
                <span className="topbar-music-control-icon">
                    <Icon size="18px" name="trackBack"></Icon>
                </span>
                <span className="topbar-music-control-icon">
                    <Icon size="18px" name="pause"></Icon>
                </span>
                <span className="topbar-music-control-icon">
                    <Icon size="18px" name="trackForward"></Icon>
                </span>
                
            </div>
            <div className="topbar-status">
                <span style={{color:"#777"}}>21°C</span>
                <span>5G</span>
                <span><Icon name="bluetooth" size="18px"/></span>
                <span style={{color:"#777"}}><Icon name="wifi" size="18px"/></span>
            </div>
        </div>
    )
};

export default TopBar;