import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  backendPortfolio,
  scraperPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "backend",
      title: "Backend",
    },
    {
      id: "scraper",
      title: "Scraper",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "backend":
        setData(backendPortfolio);
        break;
      case "scraper":
        setData(scraperPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
        <div className="item">
          <img className="chess" src="assets/chess.png" alt="Chess App" />
          <h3>Chess App</h3>
        </div>
        <div>
        <h2>In case it wasn't obvious, nothing here is real</h2>
      <h3>Just wanted to follow along a quick React project</h3>
      <h3>Thanks Lama Dev on YouTube! :)</h3>
      <a href="https://www.youtube.com/watch?v=7WwtzsSHdpI&t=5940s&ab_channel=LamaDev">
                  <span>The tutorial I followed to make the site</span>
                </a>
      <h3>and SuperSimpleDev too!</h3>
      <a href="https://www.youtube.com/watch?v=p1QU3kLFPdg&ab_channel=SuperSimpleDev">
                  <span>How to get the website live</span>
                </a>
        </div>
      </div>
    </div>
  );
}
