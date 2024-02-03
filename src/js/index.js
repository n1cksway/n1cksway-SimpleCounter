//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/home.jsx";
// import SecondsCounter from "./component/SecondsCounter.jsx";


const SecondsCounter = (props) => {
	return (
		<div className="counter-display">
			<div className="clock-img">        
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                </svg>
            </div>
			<div className="number four">{props.four % 10}</div>
			<div className="number three">{props.three % 10}</div>
			<div className="number two">{props.two % 10}</div>
            <div className="number one">{props.one % 10}</div>
		</div>
	);
};

    SecondsCounter.PropTypes= {
        four: PropTypes.number,
        three: PropTypes.number,
        two: PropTypes.number,
        one: PropTypes.number
    };

let counter = 0
setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter ++;
    console.log(four,three,two,one);
    
    ReactDOM.render(
    <SecondsCounter one={one} two={two} three={three} four={four} />
    , document.querySelector("#app"));

},1000);
//render your react application
