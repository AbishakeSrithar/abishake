import "./intro.scss";
import TypeWriterEffect from "react-typewriter-effect";
import React, { useState, useEffect } from 'react';

export default function Intro() {
  const DelayedImage = () => {
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 12000); // delay in milliseconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    return (
        <div>
            {showImage && <img src="abishake/assets/spongebob.webp" alt="Delayed Spongebob Meme" />}
        </div>
    );
};

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="./abishake/assets/abishake.png"
            alt="Baby Groot smiling with finger on Blow Up Everything Button"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Abishake Srithar</h1>
          <h3>
            Ignore the bad photoshop,{" "}
            <span><TypeWriterEffect
              textStyle={{
                fontFamily: "Roboto",
                color: "#00B8D8",
                fontWeight: 500,
                fontSize: "1em",
              }}
              multiText={[
                "that's not why we're here",
                "I'm a Programmer!"
              ]}
              multiTextDelay={3000}
              typeSpeed={30}
            />
            </span>
            <span className="mobile"><TypeWriterEffect
              textStyle={{
                fontFamily: "Roboto",
                color: "#00B8D8",
                fontWeight: 500,
                fontSize: "1em",
              }}
              multiText={[
                "",
                "iTs NoT AlIgNeD pRopErlY!"
              ]}
              multiTextDelay={10000}
              typeSpeed={30}
            />
            <DelayedImage/>
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="./abishake/assets/down.png" alt="down arrow"></img>
        </a>
      </div>
    </div>
  );
}
