import { useRef, useState, useEffect } from "react";
import "../assets/css/navigation.scss";
import map from "../assets/img/map-big.jpg";
import Icon from "../components/Icon";
function Navigation() {

	const [container, setContainer] = useState({w:"0px",h:"0px"});  
	const col = useRef(null);

	useEffect(()=>{
		let c = {
			w: `${col.current.clientWidth}px`,
			h: `${col.current.clientHeight}px`,
		}
		setContainer(c);
	},[]);


	return(
		<div className="mainview">
			<div className="row">
				<div ref={col} className="col navigation-relative">
					<img style={{width: container.w, height: container.h}} className="navigation-img" src={map} alt="" />
					<div className="navigation-overlay">
						<div className="navigation-directions">
							<div className="navigation-directions-next-card" style={{zIndex:3}}>
								<div className="turn">
									<Icon name="goStraight" size="64px"></Icon>
									<div className="turn-desc">

										<div className="turn-desc-info">
											<div className="turn-desc-distance">0.8</div>
											<div className="turn-desc-unit">km</div>
										</div>
										<div className="turn-desc-location">
											PRISENS GATE
										</div>
									</div>
								</div>
								<div className="progress">
									<div className="bar">
                                        <div className="handle">
                                        </div>
                                    </div>
								</div>
								<div className="sub-info">
									<div className="sub-info-piece">
										<p>10</p>
										<p>km</p>
									</div>
									<div className="sub-info-piece">
										<p>39</p>
										<p>min</p>
									</div>
									<div className="sub-info-piece">
										<p>10:35</p>
										<p>Arrival</p>
									</div>
								</div>
							</div>
							<div className="navigation-directions-default-card" style={{zIndex:2}}>
								<div className="turn">
									<Icon name="goRight" size="48px"></Icon>
									<div className="turn-desc">
										<div className="turn-desc-info">
											<div className="turn-desc-unit">2.3 km</div>
										</div>
										<div className="turn-desc-location">
											KARL JOHANS GATE
										</div>
									</div>
								</div>
							</div>
							<div className="navigation-directions-default-card" style={{zIndex:1}}>
								<div className="turn">
									<Icon name="goLeft" size="48px"></Icon>
									<div className="turn-desc">
										<div className="turn-desc-info">
											<div className="turn-desc-unit">4.2 km</div>
										</div>
										<div className="turn-desc-location">
											OLD TOWN GATE
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
}

export default Navigation;