import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I'm <span className="purple">Shubham Kumar Sharma</span>, a budding engineer with a passion for crafting digital experiences, currently pursuing my Bachelor of Engineering at the vibrant Chandigarh University. My journey into the world of technology has already taken exciting turns.
            <br />
            As a <span className="purple">Frontend Developer at Solar Secure Pvt Ltd</span>, I had the opportunity to design and implement responsive user interfaces using ReactJS, always striving for seamless navigation and enhanced user engagement. I also focused on optimizing frontend performance with HTML, CSS, and JavaScript.
            <br />
            Further expanding my horizons, I took on the role of a <span className="purple">Full Stack Developer at Diginique Techlabs</span>. There, I gained valuable experience in website maintenance, upgrades, and efficient issue resolution, contributing to improved website reliability.
            <br />
            <br />
            Beyond the realm of code, I find joy in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Immersing myself in the strategic worlds of <span className="purple">Playing Games</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Beyond coding, continuous learning fuels my growth <span className="purple">Diving Deep into New Frameworks</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new horizons and cultures through <span className="purple">Travelling</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a meaningful impact."
          </p>
          <footer className="blockquote-footer">Shubham Kumar Sharma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;