import "./intro.scss";
import TypeWriterEffect from "react-typewriter-effect";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="./assets/abishake.png"
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
                fontSize: "1.5em",
              }}
              multiText={[
                "that's not why we're here",
                "I'm a Programmer"
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
            />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="../../assets/down.png" alt="down arrow"></img>
        </a>
      </div>
    </div>
  );
}
