import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "assets/github.png",
      title: "Chess Backend",
      desc: `This project gave me an introduction to several Java Design Patterns such as Builders, Factories and got me started with Swing.
      I decided after this to read Head First Java and Design Patterns to see what else there was out there. My next goal is to make the board game Go
      from scratch!`,
      img: "assets/chess.png",
      link: "https://github.com/AbishakeSrithar/ChessProject"
    },
    {
      id: "2",
      icon: "assets/github.png",
      title: "Personal Website",
      desc: `I've always wanted to make a personal website and with a domain name like this one,
      it was finally time. This project gave me a look into the Front End side of things, with Javascript, React and Sass.`,
      img: "assets/personalwebsite.png",
      link: "https://github.com/AbishakeSrithar/abishake"
    },
    {
      id: "3",
      icon: "assets/github.png",
      title: "Mini Games",
      desc: `In case you couldn't tell already, I love games! Whenever I want to get to grips with a new language/software
      the first thing I go and do is to go try make a basic game with it. I have made mini games in Python, Javascript, Java, C# (Unity)
      and GDScript (Godot).`,
      img: "assets/games.png",
      link: "https://github.com/AbishakeSrithar/FirstGodotGame"
    },
    {
      id: "4",
      icon: "assets/codewarslogo.svg",
      title: "Codewars",
      desc: `Codewars is how I started learning programming and holds a special place in my heart. It amified coding with lots of mathsy puzzles! Next step is to improve my Data Structures & Algorithm knowledge and continue
      tackling problems on Leetcode!`,
      img: "assets/codewars.png",
      link: "https://www.codewars.com/users/AbishakeSrithar"
    },
  ];

  const handleClick = (direction) => {
    direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <h1>Code</h1>
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={`${process.env.PUBLIC_URL}/${d.icon}`} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <br></br>
                  <p>{d.desc}</p>
                  <a href={d.link}>
                    <br></br>
                    <span>Link to Project</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img.startsWith("https") ? d.img : `${process.env.PUBLIC_URL}/${d.img}`} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/arrow.png`} className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src={`${process.env.PUBLIC_URL}/assets/arrow.png`} className="arrow right" alt="" onClick={()=>handleClick("right")} />
    </div>
  );
}
