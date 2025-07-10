import React from 'react';
import '../../styles/_skills.scss';


import ReactIcon from '../../styles/images/React-icon.svg.png';
import NodeIcon from '../../styles/images/nodejs.png';
import JsIcon from '../../styles/images/Js.png';
import HtmlIcon from '../../styles/images/HTML5.png';
import CssIcon from '../../styles/images/CSS.png';
import MongoIcon from '../../styles/images/Mongodb.png';
import ExpressIcon from '../../styles/images/Express.png';
import GitIcon from '../../styles/images/Git.png';
import VsIcon from '../../styles/images/Visual_Studio_Code.png';
import FeedlyIcon from '../../styles/images/Feedly-logo.png';
import NotionIcon from '../../styles/images/notion.png';
import NextIcon from '../../styles/images/Next.png';
import { useTranslation } from 'react-i18next';

const SkillBoxes = () => {
  const { t } = useTranslation();

  const renderSkill = (src, alt, label) => (
    <div className="skill-item">
      <img src={src} alt={alt} className="skill-icon" />
      <span className="skill-label">{label}</span>
    </div>
  );

  return (
    <div id="skills">
      <div className="skills-container">
        {/* Frontend Section */}
        <div className="skill-box frontend">
          <h3>{t('Frontend')}</h3>
          <div className="icons">
            {renderSkill(ReactIcon, 'React', 'React')}
            {renderSkill(HtmlIcon, 'HTML5', 'HTML5')}
            {renderSkill(CssIcon, 'CSS3', 'CSS3')}
            {renderSkill(JsIcon, 'JavaScript', 'JavaScript')}
          </div>
        </div>

        {/* Backend Section */}
        <div className="skill-box backend">
          <h3>{t('Backend')}</h3>
          <div className="icons">
            {renderSkill(NodeIcon, 'Node.js', 'Node.js')}
            {renderSkill(ExpressIcon, 'Express', 'Express')}
            {renderSkill(MongoIcon, 'MongoDB', 'MongoDB')}
            {renderSkill(NextIcon, 'Next', 'Next')}
          </div>
        </div>

        {/* Tools Section */}
        <div className="skill-box Outils">
          <h3>{t('Tools')}</h3>
          <div className="icons">
            {renderSkill(NotionIcon, 'Notion', 'Notion')}
            {renderSkill(GitIcon, 'Git', 'Git')}
            {renderSkill(FeedlyIcon, 'Feedly', 'Feedly')}
            {renderSkill(VsIcon, 'VsCode', 'VS Code')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBoxes;
