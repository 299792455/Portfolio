import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ProfileCard from './components/about/profileCard';
// import TimeLine from './components/about/timeLine';
import ContactForm from './components/contact/contactForm';
import SocialLinks from './components/contact/socialLinks';
import Projets from './components/projets/projets';
// import SkillCloud from './components/skills/skillCloud';
import IntroScreen from './pages/IntroScreen';
// import SkillBoxes from './components/skills/skillBoxes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutNow from './components/about/aboutNow';
import PortfolioSlider from './components/projets/portfolioSlider';


function App() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    // Récupérer le compteur depuis le localStorage
    let introCount = localStorage.getItem('introCount');

    if (introCount === null) {
      // Si le compteur n'existe pas, le définir à 1 et afficher l'intro
      localStorage.setItem('introCount', '1');
      setShowIntro(true);
    } else {
      introCount = parseInt(introCount, 1);

      if (introCount < 4) {
        // Incrémenter le compteur et afficher l'intro
        localStorage.setItem('introCount', (introCount + 1).toString());
        setShowIntro(true);
      } else {
        // Ne plus afficher l'intro
        setShowIntro(false);
      }
    }
  }, []);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      {showIntro ? (
        <IntroScreen onFinish={handleIntroFinish} />
      ) : (
        <>
          <Header />
          <main>
            <section id="about">
              <ProfileCard />
            </section>
            <section id="skills">
  <div className="skills-container">
    
  </div>

  <div className="timeline">
    <AboutNow />
  </div>
</section>
<section id="projets">
  <div className="section-wrapper">
    <PortfolioSlider />
  </div>
</section>

<section id="contact">
  <div className="section-wrapper">
    <ContactForm />
  </div>
</section>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
