import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ProfileCard from './components/about/profileCard';
// import TimeLine from './components/about/timeLine';
import ContactForm from './components/contact/contactForm';
import SocialLinks from './components/contact/socialLinks';
import Projets from './components/projets/projets';
// import SkillCloud from './components/skills/skillCloud';
// import IntroScreen from './pages/IntroScreen';
// import SkillBoxes from './components/skills/skillBoxes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutNow from './components/about/aboutNow';
import PortfolioSlider from './components/projets/portfolioSlider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mentions from './pages/Mentions';
import NotFound from './pages/NotFound';
import { Navigate } from 'react-router-dom';

function App() {
  // const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Désactivation de l'écran d’intro
    /*
    let introCount = localStorage.getItem('introCount');
    if (introCount === null) {
      localStorage.setItem('introCount', '1');
      setShowIntro(true);
    } else {
      introCount = parseInt(introCount, 1);
      if (introCount < 4) {
        localStorage.setItem('introCount', (introCount + 1).toString());
        setShowIntro(true);
      } else {
        setShowIntro(false);
      }
    }
    */
  }, []);

  // const handleIntroFinish = () => {
  //   setShowIntro(false);
  // };

  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<Navigate to="/" />} />
        <Route
          path="/"
          element={
            // showIntro ? (
            //   <IntroScreen onFinish={handleIntroFinish} />
            // ) : (
              <>
                <Header />
                <main>
                  <section id="about">
                    <ProfileCard />
                  </section>
                  <section id="skills">
                    <div className="skills-container"></div>
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
            // )
          }
        />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
