import "./topbar.scss";
import groot from "../../assets/groot.jpeg"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo"></a>
          <div className="itemContainer">
            <img className="groot" src={groot}></img>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
