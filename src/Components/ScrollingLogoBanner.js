import React from 'react';
import koh from "../images/kohler.png";
import herocorp from "../images/Hero MotoCorp logo.jpeg";
import ada from "../images/adani.png";
import ambuja from "../images/ambuja-logo-png_seeklogo-434902.png";
import orient from "../images/orient.png";
import toyota from "../images/toyota.png";
import tata from "../images/tata.png";
import pepsi from "../images/pepsi.png";
import mahindra from "../images/mahindra.png";
import essar from "../images/essar.png";
import bajaj from "../images/bajaj.png";
import laval from "../images/laval.png";

const ScrollingLogoBanner = () => {
  const partnerLogos = [toyota, tata, pepsi, mahindra, essar, bajaj, laval, koh, herocorp, ada, ambuja, orient];
  return (
    // 3. USE THE JSX STRUCTURE FOR THE SCROLLING BANNER
    <section className="bg-cyan-50 py-12">
      <div className="scrolling-banner-container">
        <div className="scrolling-banner">
          {/* Render the logos once */}
          {partnerLogos.map((logo, idx) => (
            <img key={`logo-${idx}`} src={logo} alt={`Partner logo ${idx + 1}`} />
          ))}
          {/* Render the logos a second time for the seamless loop */}
          {partnerLogos.map((logo, idx) => (
            <img key={`logo-duplicate-${idx}`} src={logo} alt={`Partner logo ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingLogoBanner;