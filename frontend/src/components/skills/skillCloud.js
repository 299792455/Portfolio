import React from 'react';
import { useEffect } from 'react';
import '../../styles/_skills.scss';


import ReactIcon from '../../styles/images/React-icon.svg.png';
import NodeIcon from '../../styles/images/nodejs.png';
import JsIcon from '../../styles/images/Js.png';
import HtmlIcon from '../../styles/images/HTML5.png';
import CssIcon from '../../styles/images/CSS.png';
import MongoIcon from '../../styles/images/Mongodb.png';
import ExpressIcon from '../../styles/images/Express.png';
import GitIcon from '../../styles/images/Git.png';

const SkillCloud = () => {
  useEffect(() => {
    if (window.TagCanvas) {
      try {
        window.TagCanvas.Start('skillCanvas', 'skillTags', {
          textColour: '#4caf50',
          outlineColour: '#ffffff',
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.03,
          initial: [0.1, -0.1],
          wheelZoom: false,
          dragControl: true,
          freezeActive: false,
        });
      } catch (e) {
        console.error('TagCanvas failed to start', e);
      }
    }
  }, []);

  return (
    <div className="skill-cloud">
      <h2>Techs utilisées</h2>
      <canvas id="skillCanvas" width="350" height="350">
        <p>Votre navigateur ne supporte pas les canvas.</p>
      </canvas>
      <div id="skillTags" style={{ display: 'none' }}>
  <ul>
    <li>
      <a href="#">
        <img src={ReactIcon} alt="React" className="tag-icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={NodeIcon} alt="Node.js" className="tag-icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={JsIcon} alt="JavaScript" className="tag-icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={HtmlIcon} alt="HTML" className="tag-icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={CssIcon} alt="CSS" className="tag-icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={MongoIcon} alt="MongoDB" className="tag-icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={ExpressIcon} alt="Express" className="tag-icon" />
      </a>
    </li>
    <li>
      <a href="#">
        <img src={GitIcon} alt="Git" className="tag-icon" />
      </a>
    </li>
  </ul>
</div>
    </div>
  );
};

export default SkillCloud;
