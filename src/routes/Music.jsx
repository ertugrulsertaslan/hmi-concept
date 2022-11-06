import album2 from "../assets/img/album2.jpg";
import album3 from "../assets/img/album3.jpg";
import album4 from "../assets/img/album4.jpg";
import album5 from "../assets/img/album5.jpg";
import Icon from "../components/Icon";
function Music () {
    return (
        <div className="mainview">
            <div className="row row-min">
                <div className="col">
                    <p className="row-title">Recomended for you</p>
                </div>
                <div className="col">
                    <div className="search-box">
                        <p>Search here</p>
                        <span>🔎</span>
                    </div>
                </div>
            </div>
            <div className="row mt-1">
                <div className="col">
                    <div className="box">
                        <div className="content">
                            <img src={album2} alt="" srcset="" />
                        </div>
                        <div className="content content-overlay">
                            <div className="bottom-overlay">
                                <div className="playlist-mark"></div>
                                <p>Weekly Mix</p>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="col">
                    <div className="box bg-transparent">
                        <div className="content">
                            <div className="content-container">
                                <div className="content-row">
                                    <div className="content-box left">
                                        <div className="content">
                                            <img src={album3} alt="" srcset="" />
                                        </div>
                                        <div className="content content-overlay">
                                            <div className="bottom-overlay">
                                                <div className="playlist-mark"></div>
                                                <p>Relax</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-box right">
                                        <div className="content">
                                            <img src={album4} alt="" srcset="" />
                                        </div>
                                        <div className="content content-overlay">
                                            <div className="bottom-overlay">
                                                <div className="playlist-mark"></div>
                                                <p>Work Out</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-row"> 
                                    <div className="content-box">
                                        <div className="content">
                                            <img src={album5} alt="" srcset="" />
                                        </div>
                                    </div>
                                    <div className="content content-overlay">
                                            <div className="bottom-overlay">
                                                <div className="playlist-mark"></div>
                                                <p>Party</p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="box">
                        <div className="content">
                            <div className="body">
                                <div className="playlist-group">
                                    <p className="playlist-selected">My Favorite</p>
                                    <p>Top 50</p>
                                    <p>Weekly Choice</p>
                                </div>
                                <div>
                                    <div className="playing-song">
                                        <p className="md c-primary">1</p>
                                        <div className="song-info">
                                            <p className="lg c-primary">Shadow Moses</p>
                                            <p className="md">Sempiternal</p>
                                        </div>
                                        <p className="md artist ">BMTH</p>
                                        <p className="md length">5:37</p>
                                        <span>...</span>
                                    </div>
                                    <div className="playing-song">
                                        <p className="md">2</p>
                                        <div className="song-info">
                                            <p className="lg">Ich Will</p>
                                            <p className="md">Mutter</p>
                                        </div>
                                        <p className="md artist ">Rammstein</p>
                                        <p className="md length">3:32</p>
                                        <span>...</span>
                                    </div>
                                    <div className="playing-song">
                                        <p className="md">3</p>
                                        <div className="song-info">
                                            <p className="lg">Papercut</p>
                                            <p className="md">Hybrid Theory</p>
                                        </div>
                                        <p className="md artist ">Linkin Park</p>
                                        <p className="md length">3:04</p>
                                        <span>...</span>
                                    </div>
                                    <div className="playing-song">
                                        <p className="md">4</p>
                                        <div className="song-info">
                                            <p className="lg">Monster</p>
                                            <p className="md">Awake</p>
                                        </div>
                                        <p className="md artist ">Skillet</p>
                                        <p className="md length">3:05</p>
                                        <span>...</span>
                                    </div>
                                    <div className="playing-song">
                                        <p className="md">5</p>
                                        <div className="song-info">
                                            <p className="lg">Deutschland</p>
                                            <p className="md">Rammstein</p>
                                        </div>
                                        <p className="md artist ">Rammstein</p>
                                        <p className="md length">5:22</p>
                                        <span>...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-min mt-2">
                <div className="col">
                    <p className="row-title">Explore</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="col-fluid bg-frost">
                        <div className="box-48">
                            <img src={album2} alt="" />
                        </div>
                        <div>
                            <p>Heathens</p>
                            <p>Aurora</p>
                        </div>
                        <span class="music-control">
                            <Icon name="heart"/>
                        </span>
                        <span>
                            <Icon name ="trackBack"/>
                        </span>
                        <span>
                            <Icon name ="pause"/>
                        </span>
                        <span>
                            <Icon name ="trackForward"/>
                        </span>
                        <div className="music-progress">
                            <span>1:20</span>
                            <div className="bar">
                                <div className="handle">
                                </div>
                            </div>
                            <span>3:50</span>
                        </div>
                        <span>
                            <Icon name="heart" />
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music;