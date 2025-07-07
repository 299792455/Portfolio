import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../../styles/_about.scss';

const ProfileCard = () => {
  const { t } = useTranslation();
  const titlesRef = useRef([]);
  const canvasRef = useRef(null);

  // Animation des titres
  useEffect(() => {
    let current = 0;
    const showNextTitle = () => {
      const el = titlesRef.current[current];
      if (!el) return;

      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            el.classList.add('visible');
            observer.disconnect();
            current++;
            if (current < titlesRef.current.length) {
              setTimeout(showNextTitle, 600);
            }
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
    };
    showNextTitle();
  }, []);

  // Fond animé sans jQuery
useEffect(() => {
  let ww, wh, canvas, ctx;
  let frame = 0;
  const rate = 15;
  let particles = [];
  let shapes = [];
  let frames = [];
  const maxShapes = 200;
  const maxParticles = 300;

  // Variables pour la souris
  let mouseX = null;
  let mouseY = null;

  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener('mousemove', handleMouseMove);

  const resize = () => {
    ww = window.innerWidth;
    wh = window.innerHeight;
    if (canvasRef.current) {
      canvasRef.current.width = ww;
      canvasRef.current.height = wh;
      ctx = canvasRef.current.getContext('2d');
    }
  };

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      const random = Math.random() - 0.5;
      const randPos = random * wh;
      this.x = 0;
      this.y = wh * 0.5 + randPos;
      this.a = -45;
      this.v = Math.random() * 2;
      const colors = ["#3de9dd", "#3de9cf", "#3de7e9", "#3dcae9", "#e93d49"];
      const randCol = Math.floor(Math.random() * colors.length);
      this.color = colors[randCol];
      this.wiggle = randCol === 4;
      this.radius = Math.random() * 5;
    }

    move() {
      this.x += Math.cos(this.a) * this.v * 4;
      this.y += Math.sin(this.a) * this.v;

      if (this.wiggle) {
        this.a = Math.sin(6 * (Math.random() - 0.5) * -1);
      } else {
        this.a = 0;
      }

      // REPULSION
      if (mouseX !== null && mouseY !== null) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulseDistance = Math.max(ww, wh);

        if (dist < repulseDistance) {
          const angle = Math.atan2(dy, dx);
          const strength = (repulseDistance - dist) / repulseDistance * 5;
          this.x += Math.cos(angle) * strength;
          this.y += Math.sin(angle) * strength;
        }
      }
    }

    render() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  class Shape {
    constructor() {
      const random = Math.random() - 0.5;
      this.newRandom = Math.random();
      this.x = ww + 256;
      this.y = wh * Math.random();
      this.size = Math.random() * 200;
      this.coordsX = [];
      this.coordsY = [];
      const points = Math.max(3, Math.round(Math.random() * 4));
      for (let i = 0; i < points; i++) {
        this.coordsX.push(Math.round(Math.random() * this.size));
        this.coordsY.push(Math.round(Math.random() * this.size));
      }
      this.lAlpha = Math.min(0.25, Math.abs(random));
      this.fAlpha = 0;
      this.v = Math.random() * 4.5;
    }

    move() {
      this.x -= this.v;
      this.y += (this.newRandom - 0.5) * 0.5;
    
      // REPULSION
      if (mouseX !== null && mouseY !== null) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repulseDistance = Math.max(ww, wh);
    
        if (dist < repulseDistance) {
          const angle = Math.atan2(dy, dx);
          const strength = (repulseDistance - dist) / repulseDistance * 5;
          this.x += Math.cos(angle) * strength;
          this.y += Math.sin(angle) * strength;
        }
      }
    }

    render() {
      ctx.beginPath();
      ctx.moveTo(this.x + this.coordsX[0], this.y + this.coordsY[0]);
      for (let i = 1; i < this.coordsX.length; i++) {
        ctx.lineTo(this.x + this.coordsX[i], this.y + this.coordsY[i]);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(233,61,73,${this.lAlpha})`;
      ctx.stroke();
      ctx.fillStyle = `rgba(233,61,73,${this.fAlpha})`;
      ctx.fill();
    }
  }

  class Frame {
    render() {
      ctx.globalCompositeOperation = "destination-over";
      ctx.beginPath();
      ctx.rect(0, 0, ww, wh);
      ctx.closePath();
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    }
  }

  const setFlickers = () => {
    const flickers = document.querySelectorAll('.flicker');
    flickers.forEach(flicker => {
      const flick = () => {
        const dur = Math.random() * 200;
        flicker.style.opacity = (Math.random() * 0.25 + 0.75).toString();
        setTimeout(() => {
          flicker.style.opacity = "1.0";
          setTimeout(flick, dur);
        }, dur);
      };
      flick();
    });
  };

  setFlickers();

  const populate = (num) => {
    for (let i = 0; i < num; i++) {
      particles.push(new Particle());
    }
  };

  const populateShapes = (num) => {
    for (let i = 0; i < num; i++) {
      shapes.push(new Shape());
    }
  };

  const populateFrames = () => {
    frames.push(new Frame());
  };

  const clear = () => {
    ctx.globalAlpha = 0.0999;
    ctx.fillStyle = "#000621";
    ctx.fillRect(0, 0, ww, wh);
    ctx.globalAlpha = 1.0;
  };

  const animate = () => {
    if (!ctx) return;

    particles.forEach((p, i) => {
      p.move();
      if (p.x > ww) {
        particles.splice(i, 1);
      } else {
        p.render();
      }
    });

    clear();

    shapes.forEach((s, i) => {
      s.move();
      if (s.x < 0 || shapes.length > maxShapes) {
        shapes.splice(i, 1);
      } else {
        s.render();
      }
    });

    frames.forEach(f => {
      f.render();
    });

    requestAnimationFrame(animate);
  };

  populateFrames();
  for (let i = 0; i < maxParticles / 5; i++) populate(1);
  for (let i = 0; i < maxShapes / 10; i++) populateShapes(1);

  animate();

  const interval = setInterval(() => {
    if (particles.length < maxParticles) {
      populate(2);
    }
    if (shapes.length < maxShapes) {
      populateShapes(1);
    }
  }, 150);

  return () => {
    window.removeEventListener('resize', resize);
    window.removeEventListener('mousemove', handleMouseMove);
    clearInterval(interval);
  };
}, []);


  return (
    <div className="container">
      <div id="content">
        <h2
          className="profile-title outline flicker"
          ref={el => (titlesRef.current[0] = el)}
        >
          APP WEB
        </h2>
        <h2
          className="profile-title flicker"
          ref={el => (titlesRef.current[1] = el)}
        >
          SITES WEB
        </h2>
        <h2
          className="profile-title outline flicker"
          ref={el => (titlesRef.current[2] = el)}
        >
          OPTIMISATION
        </h2>
        <p className="developer-tag">{t('developerDescription')}</p>
      </div>

      <div className="scroll-indicator">
        <span className="chevron"></span>
      </div>

      <canvas ref={canvasRef} id="cv"></canvas>
    </div>
  );
};

export default ProfileCard;
