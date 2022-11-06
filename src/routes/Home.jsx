import map from "../assets/img/map.jpg";
import album1 from "../assets/img/album1.jpg";
import album2 from "../assets/img/album2.jpg";
import album3 from "../assets/img/album3.jpg";
import album4 from "../assets/img/album4.jpg";
import album5 from "../assets/img/album5.jpg";  
import 'react-circular-progressbar/dist/styles.css';
import Icon from "../components/Icon.jsx";
import Chart from "../components/Chart";
import CarInfo from "../components/CarInfo.jsx";




 
function Home() {

    //Date data
    let date = new Date();
    let hour = String(date.getHours()).padStart(2, "0"); 
    let minute = String(date.getMinutes()).padStart(2, "0"); 
    let month = date.getMonth();
    let monthDay = date.getDate();
    let day = date.getDay();
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let year = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className="mainview">
            <div className="row">
                <div className="col">
                    <div className="box">
                        <div className="content">
                            <img src={map} alt="" srcset="" />
                        </div>          
                    </div>
                </div>
                <div className="col">
                    <div className="box">
                        <div className="content">
                            <div className="body">
                                <div className="title">
                                    MUSIC
                                </div>
                                <div className="album-cover">
                                    <img style={{zIndex:"1"}} className="small-img left" src={album1} alt="" />
                                    <img style={{zIndex:"2"}} className="medium-img left" src={album3} alt="" />
                                    <img style={{zIndex:"3"}} src={album2} alt="" />
                                    <img style={{zIndex:"2"}} className="medium-img right" src={album4} alt="" />
                                    <img style={{zIndex:"1"}} className="small-img right" src={album5} alt="" />
                                </div>
                                <div className="song-name">
                                    Another Love
                                </div>
                                <div className="artist-name">
                                    Tom Odell
                                </div>
                                <div className="music-control">
                                    <span className="other"><Icon size="24px" name="heart" /></span> 
                                    <span className="track"><Icon size="24px" name="trackBack" /></span>
                                    <span className="play"><Icon size="24px" name="pause" /></span>
                                    <span className="track"><Icon size="24px" name="trackForward"/></span>
                                    <span className="other"><Icon size="24px" name="loop"/></span>
                                </div>
                                <div className="music-progress">
                                    <span>1:20</span>
                                    <div className="bar">
                                        <div className="handle">
                                        </div>
                                    </div>
                                    <span>3:50</span>
                                </div>
                            </div>



                        </div>
                       
                    </div>
                </div>
                <div className="col">
                    <div className="box">
                        <div className="content">
                            <div className="body">
                                <div className="title">MY CAR</div>
                                    <CarInfo/>
                                <div className="chart">
                                    <div className="chart-label">
                                        Energy Usage Last 7 Days
                                    </div>
                                    <Chart></Chart>                                   
                                </div>
                                <div className="summary">
                                    <div>
                                        <div className="value">
                                            <h5>200</h5>
                                            <p>km</p> 
                                        </div>
                                        <div className="label">
                                            Average Distances
                                        </div>   
                                    </div>
                                    <div>
                                        <div className="value">
                                            <h5>230</h5>
                                            <p>km</p> 
                                        </div>
                                        <div className="label">
                                            Projected Ranges
                                        </div> 
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <div className="widget">
                        <div className="clock">
                            <div>
                                <h1>{hour}:{minute}</h1>  
                            </div>
                            <div>
                                {week[day-1]}, {monthDay} {year[month]}
                            </div>
                        </div>
                        <div className="weather">
                            <div>
                                <Icon size="24px" name="location"/>
                                <p>Istanbul, Turkiye</p> 
                            </div>
                            <div>
                                <Icon size="24px" name="cloud"/>
                                <p>Cloudy, 21°C</p> 
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col col-2">
                    <div className="calendar-container">
                        <div className="body">
                            <div className="title">CALENDAR</div>
                            <div className="calendar">
                                <div className="date">
                                    <div className="day">
                                        {monthDay}
                                    </div>
                                    <div className="month">
                                        {year[month]}
                                    </div>
                                </div>
                                <div className="event-btn">
                                    <Icon size="100%" name="plus"/>
                                </div>
                                <div className="event-container">
                                    <div className="event-line"></div>
                                    <div className="event">
                                        <div className="event-title">
                                            Apple Keynote
                                        </div>
                                        <div className="detail">
                                            Online
                                        </div>
                                        <div className="point"></div>
                                        <div className="schedule">
                                            <p>10.30 - 11.30</p>
                                        </div>
                                    </div>
                                    <div className="event">
                                        <div className="event-title">
                                            Product meeting
                                        </div>
                                        <div className="detail">
                                            Video call
                                        </div>
                                        <div className="point"></div>
                                        <div className="schedule">
                                            <p>15.30 - 16.00</p>
                                        </div>
                                    </div>

                                    <div className="event">
                                        <div className="event-title">
                                            Go grocery
                                        </div>
                                        <div className="detail">
                                            Tomatoes...
                                        </div>
                                        <div className="point"></div>
                                        <div className="schedule">
                                            <p>18.00</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    )
};

export default Home;