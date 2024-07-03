import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li>Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Backend</li>
        <li>Scraping</li>
      </ul>
      <div className="container">
        <div className="item">
          <img className="chess" src="../../assets/chess.png" alt="Chess GUI Application" />
          <h3>Chess Engine with GUI</h3>
        </div>
      </div>
    </div>
  );
}
