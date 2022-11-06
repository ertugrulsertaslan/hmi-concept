import { useState, useEffect } from "react";
import { CircularProgressbarWithChildren , buildStyles } from 'react-circular-progressbar';
import Icon from "../components/Icon.jsx";

function CarInfo() {

    let [v1, setV1] = useState(0);
    let [v2, setV2] = useState(0);
    let [v3, setV3] = useState(0);

    //Promisify the settimeout
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //Animation sequence for launch
    async function launchSequence() {

        //Launch animation

        //Set max value for dials
        await sleep(500);  
        setV1(100);
        setV2(100);
        setV3(100);


        //Wait half a second
        //Set current value
        await sleep(500);
        setV1(75);
        setV2(80);
        setV3(40);
    }


    useEffect(()=>{
        launchSequence()
    },[])



    return (
        <div className="info">
            <div className="data left">
                <div className="bar">
                    <CircularProgressbarWithChildren  value={v1} strokeWidth={10} styles={buildStyles({
                        strokeLinecap: 'round',
                        pathColor: `rgb(4, 103, 69)`,
                        trailColor: 'rgb(20, 27, 47)'
                    })}>
                        <div className="icon">
                            <Icon size="100%" name="battery"/>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="value">
                        <h5>75</h5>
                        <p>%</p>
                    </div>
                    <div className="label">
                        Car Battery
                    </div>
                </div>
            <div className="data">
                <div className="bar">
                    <CircularProgressbarWithChildren   value={v2} strokeWidth={10} styles={buildStyles({
                        strokeLinecap: 'round',
                        pathColor: `rgb(24, 55, 105)`,
                        trailColor: 'rgb(20, 27, 47)'
                    })}>
                        <div className="icon">
                            <Icon size="100%" name="car"/>
                        </div>
                
                    </CircularProgressbarWithChildren>
                </div>

                <div className="value">
                        <h5>230</h5>
                        <p>km left</p> 
                    </div>
                    <div className="label">
                        Projected Range
                    </div>
                </div>
            <div className="data right">
                <div className="bar">
                    <CircularProgressbarWithChildren  value={v3} strokeWidth={10} styles={buildStyles({
                        strokeLinecap: 'round',
                        pathColor: `rgb(132, 68, 89)`,
                        trailColor: 'rgb(20, 27, 47)'
                    })}>
                        <div className="icon">
                            <Icon size="100%" name="wrench"/>
                        </div>
                    </CircularProgressbarWithChildren>
                </div>
                <div className="value">
                    <h5>90</h5> 
                    <p>days left</p>
                    
                </div>
                <div className="label">
                    Car Maintain
                </div>
            </div>
        </div>
    )
}

export default CarInfo;