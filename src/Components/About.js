import React, { useState } from "react";

const About = () => {

    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    });

    const [label, setLabel] = useState("Enable Dark Mode");

    const toggleMode = () => {
        if (style.color === 'white') {
            setStyle({
                color: "black",
                backgroundColor: "white",
            });
            setLabel("Enable Dark Mode");
        }
        else{
            setStyle({
                color: "white",
                backgroundColor: "black",
                border: "1px solid white",
                borderRadius : "5px"

            });
            setLabel("Enable Light Mode");

        }
    }



    return (
        <div className="container" style={style}>
            <h2 className="my-3">About Us</h2>
            <div className="card" style={style}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <button onClick={toggleMode} className="btn btn-primary my-2">{label}</button>
        </div>
    );
};


export default About;
