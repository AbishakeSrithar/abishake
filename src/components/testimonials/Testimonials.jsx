import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 0,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./abishake/assets/youtube.png",
      desc: "Stop reading my dummy data u pleb! There's too much to write and so little time.",
    },
    {
      id: 1,
      name: "sLaYzx",
      title: "My Teammate",
      img: "./abishake/assets/angrygamerkid.jpg",
      icon: "./abishake/assets/youtube.png",
      desc: "Jett smokes are the only smokes you need",
    },
    {
      id: 2,
      name: "Abishake",
      title: "Random Gamer",
      img: "./abishake/assets/valorant.jpg",
      icon: "./abishake/assets/youtube.png",
      desc: "Don't play Valorant, it's bad for your brain. I'm in too deep though, just go on without me!",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./abishake/assets/linkedin.png",
      desc: "If you make this screen to small everything goes a bit haywire, maybe I'll fix it, maybe I won't",
    },
    {
      id: 4,
      name: "Sage",
      title: "Healer Main",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "./abishake/assets/linkedin.png",
      desc: "I heal myself for 30 instead of my teammates for 100, then hide behing my wall and bait my entire team",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
        <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="./abishake/assets/right-arrow.png" className="left" alt="" />
            <img src={d.img} className="user" alt="" />
            <img src={d.icon} className="right" alt="" />
          </div>
          <div className="centre">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
