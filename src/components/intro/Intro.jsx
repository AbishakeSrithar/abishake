import "./intro.scss";
import TypeWriterEffect from "react-typewriter-effect";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src={`${process.env.PUBLIC_URL}/assets/abishake.png`}
            alt="Baby Groot smiling with finger on Blow Up Everything Button"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Abishake</h1>
          <h3>Ignore the bad photoshop,</h3>
          <h3>
            {" "}
            <span><TypeWriterEffect
              textStyle={{
                fontFamily: "VT323",
                color: "#00B8D8",
                fontWeight: 500,
                fontSize: "1.75em",
              }}
              multiText={[
                "that's not why we're here",
                "I'm a Programmer/Gamer!"
              ]}
              multiTextDelay={3000}
              typeSpeed={30}
            />
            </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={`${process.env.PUBLIC_URL}/assets/down.png`} alt="down arrow"/>
        </a>
      </div>
    </div>
  );
}
