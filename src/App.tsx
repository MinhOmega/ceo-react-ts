import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <img src={'./logo.png'} className="jr-logo" alt="JR-West Logo" />
        <h1>Travel Support</h1>
        <p>by JR-West</p>
      </header>

      <section className="intro-links">
        <div className="horizontal-line"></div>
        <a href="#" className="intro-link" tabIndex={0} aria-label="Start SEO">start App</a>
        <a href="#" className="intro-link" tabIndex={0} aria-label="How to Use Application">How to Use Application</a>
      </section>

      <main className="main-content">
        <div className="map-container">
          <img src={'./bg.png'} className="japan-map" alt="Map of Japan" />
          <div className="locations">
            <p className="location-label">Kanazawa</p>
            <p className="location-label">Kyoto</p>
            <p className="location-label">Osaka</p>
            <p className="location-label">Okayama</p>
            <p className="location-label">Hiroshima</p>
            <p className="location-label">Fukuoka</p>
          </div>
          <div className="kix-label">
            <p>KIX</p>
            <p>(Kansai International Airport)</p>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>COPYRIGHT © WEST JAPAN RAILWAY COMPANY all rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
