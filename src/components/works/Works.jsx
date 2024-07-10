import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "abishake/assets/deadcells.jpg",
      title: "Dead Cells",
      desc: `Why do you even have a domain?! Well... abishake.com looked
    kinda cool and it wasn't super expensive. Nice little Easter
    Egg too if you found this by stalking my Github :P I'll have
    to get a lot better at FrontEnd before I consider doing
    something with this. I needed a really big slab of text here,
    thank you for reading, also, have you played Dead Cells?`,
      img: "abishake/assets/deadcells.jpg",
    },
    {
      id: "2",
      icon: "abishake/assets/mobile.png",
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "3",
      icon: "abishake/assets/globe.png",
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "4",
      icon: "abishake/assets/writing.png",
      title: "Branding",
      desc: "if you go right once more...",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];

  const handleClick = (direction) => {
    direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href="https://www.youtube.com/watch?v=gX4cGcwmdsY&ab_channel=IGN">
                    <span>Link to the best trailer ever made</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="abishake/assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="abishake/assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
    </div>
  );
}
