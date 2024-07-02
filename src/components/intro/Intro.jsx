import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="./assets/groot.png"
            alt="Baby Groot smiling with finger on Blow Up Everything Button"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Abishake Srithar</h1>
          <h3>Software Engineer</h3>
        </div>
      </div>
    </div>
  );
}
