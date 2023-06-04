import "./styles.css";
import "./ResponsiveHero.css";

import HeroImg from "../../../assets/Online1.gif";

export const Hero = () => {
  return (
    <section className="HeroSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2>We Build Software and Web Apps for Businesses</h2>
          <div className="handle">
            <input type="text" placeholder="Search here" />
            <button type="text">🔎</button>
          </div>
        </div>

        <div className="rigthContent">
          <div className="heroImg">
            <img src={HeroImg} alt="draw with healthy calcule" />
          </div>
        </div>
      </div>
    </section>
  );
};
