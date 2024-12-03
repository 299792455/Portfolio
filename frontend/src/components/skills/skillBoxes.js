import React from 'react';
import '../../styles/_skills.scss';

// Import des images
import ReactIcon from '../../styles/images/React-icon.svg.png';
import NodeIcon from '../../styles/images/nodejs.png';
import JsIcon from '../../styles/images/Js.png';
import HtmlIcon from '../../styles/images/HTML5.png';
import CssIcon from '../../styles/images/CSS.png';
import MongoIcon from '../../styles/images/Mongodb.png';
import ExpressIcon from '../../styles/images/Express.png';
import GitIcon from '../../styles/images/Git.png';
import PhpIcon from '../../styles/images/PHP-logo.svg.png'
import VsIcon from '../../styles/images/Visual_Studio_Code.png'
import FeedlyIcon from '../../styles/images/Feedly-logo.png'

const SkillBoxes = () => {
  return (
    <div id="skills">
      <h2>Développement Web FullStack avec 5 ans d'expérience</h2>
      <div className="skills-container">
        {/* Frontend Section */}
        <div className="skill-box frontend">
          <h3>Frontend</h3>
          <div className="icons">
            <img src={ReactIcon} alt="React" className="skill-icon" />
            <img src={HtmlIcon} alt="HTML5" className="skill-icon" />
            <img src={CssIcon} alt="CSS3" className="skill-icon" />
            <img src={JsIcon} alt="JavaScript" className="skill-icon" />
          </div>
        </div>
        {/* Backend Section */}
        <div className="skill-box backend">
          <h3>Backend</h3>
          <div className="icons">
            <img src={NodeIcon} alt="Node.js" className="skill-icon" />
            <img src={ExpressIcon} alt="Express" className="skill-icon" />
            <img src={MongoIcon} alt="MongoDB" className="skill-icon" />
            <img src={PhpIcon} alt="PHP" className="skill-icon" />
          </div>
        </div>
        <div className="skill-box Outils">
          <h3>Outils</h3>
          <div className="icons">
            <img src={VsIcon} alt="VsCode" className="skill-icon" />
            <img src={GitIcon} alt="Git" className="skill-icon" />
            <img src={FeedlyIcon} alt="Feedly" className="skill-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBoxes;
