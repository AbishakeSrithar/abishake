import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useEffect, useState } from "react";
import {
  featuredVideos,
  valoVideos,
  fortVideos,
  codVideos,
  otherVideos,
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
      id: "valo",
      title: "Valorant",
    },
    {
      id: "fort",
      title: "Fortnite",
    },
    {
      id: "cod",
      title: "Call Of Duty",
    },
    {
      id: "other",
      title: "Other Games",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredVideos);
        break;
      case "valo":
        setData(valoVideos);
        break;
      case "fort":
        setData(fortVideos);
        break;
      case "cod":
        setData(codVideos);
        break;
      case "other":
        setData(otherVideos);
        break;
      default:
        setData(featuredVideos);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Games</h1>
      <ul>
        {list.map((item) => (
          <div className="tabContainer"><PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
        /></div>
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <div className="embedYoutube">{d.img}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
