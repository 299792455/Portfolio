import React, { useEffect, useRef } from 'react';
import '../../styles/_rainDiscount.scss';

const RainDiscount = () => {
  const canvasRef = useRef(null);
  const isAnimatingRef = useRef(true);


  const animateRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    const pourcents = [];
    let generationInterval = 200;
    let lastGeneration = Date.now();

    function drawYoutubeSymbol(x, y, size) {
      ctx.save();
      ctx.translate(x, y);

      const rectHeight = size * 0.7;
      ctx.fillStyle = '#FF0000';
      ctx.beginPath();
      ctx.roundRect(-size / 2, -rectHeight / 2, size, rectHeight, 4);
      ctx.fill();

      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();

      const triangleHeight = size * 0.3;
      const triangleWidth = size * 0.35;

      ctx.moveTo(-triangleWidth / 2, -triangleHeight / 2);
      ctx.lineTo(triangleWidth / 2, 0);
      ctx.lineTo(-triangleWidth / 2, triangleHeight / 2);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }

    function drawBillet(x, y, size) {
      ctx.save();
      ctx.translate(x, y);

      ctx.shadowColor = 'rgba(0,0,0,0)';
      ctx.shadowBlur = 2;

      ctx.fillStyle = 'rgba(76, 175, 80, 0)';
      ctx.beginPath();
      ctx.roundRect(-size, -size / 2, size * 2, size, 6);
      ctx.fill();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = `${size * 2}px Arial`;
      ctx.fillText('💵', -size / 2, size / 3);

      ctx.restore();
    }

    function createPourcent() {
      const size = 15 + Math.random() * 15;
      const count = pourcents.length;
      const isYoutube = count > 0 && count % 10 === 0;
      const isBillet = count > 0 && count % 20 === 0;

      const reductions = ['-10%', '-20%', '-30%', '-40%', '-50%', '-70%'];
      const randomReduction = reductions[Math.floor(Math.random() * reductions.length)];

      pourcents.push({
        x: Math.random() * (width - size - 10) + 5,
        y: -size,
        size: size,
        speedY: isBillet ? 0.5 : 0,
        gravity: isBillet ? 0.01 : 0.2,
        rotation: isYoutube || isBillet ? 0 : Math.random() * Math.PI * 2,
        rotationSpeed: isYoutube || isBillet ? 0 : (Math.random() - 0.5) * 0.02,
        type: isBillet ? 'billet' : isYoutube ? 'youtube' : 'pourcent',
        text: randomReduction,
        settled: false,
        wavePhase: Math.random() * Math.PI * 2
      });
    }

    function drawPourcent(p) {
      ctx.save();
      ctx.translate(p.x, p.y);

      if (p.type === 'pourcent') {
        ctx.rotate(p.rotation);
        ctx.font = `${p.size}px Arial`;
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(p.text, 0, 0);
      } else if (p.type === 'youtube') {
        drawYoutubeSymbol(0, 0, p.size * 1.5);
      } else if (p.type === 'billet') {
        drawBillet(0, 0, p.size);
      }

      ctx.restore();
    }

    function isColliding(p, others) {
      for (let o of others) {
        if (o === p || !o.settled) continue;
        const dx = p.x - o.x;
        const dy = p.y - o.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < (p.size + o.size) * 0.5) {
          return o;
        }
      }
      return null;
    }

    function updatePourcent(p, others) {
      if (!p.settled) {
        if (p.type === 'billet') {
          p.y += p.speedY;
          p.x += Math.sin(p.wavePhase + p.y * 0.05) * 1.5;

          if (p.y >= height - p.size * 1.5) {
            p.y = height - p.size * 1.5;
            p.settled = true;
          }
          return;
        }

        p.speedY += p.gravity;
        p.y += p.speedY;

        if (p.type === 'pourcent') {
          p.rotation += p.rotationSpeed;
        }

        if (p.y >= height - p.size) {
          p.y = height - p.size;
          p.settled = true;
          return;
        }

        const other = isColliding(p, others);
        if (other) {
          let slide = Math.random() < 0.5 ? -1.5 : 1.5;
          p.x += slide;

          if (p.x < 5) p.x = 5;
          if (p.x > width - p.size) p.x = width - p.size;

          if (p.speedY < 1) {
            p.settled = true;
          } else {
            p.speedY *= 0.7;
          }
        }
      }
    }

    function animate() {
      if (!isAnimatingRef.current) return;

      ctx.clearRect(0, 0, width, height);

      if (Date.now() - lastGeneration > generationInterval) {
        createPourcent();
        lastGeneration = Date.now();
      }

      pourcents.sort((a, b) => a.size - b.size);

      pourcents.forEach(p => {
        updatePourcent(p, pourcents);
        drawPourcent(p);
      });

      requestAnimationFrame(animateRef.current);
    }

    
    animateRef.current = animate;


    animateRef.current();

    const container = canvas.parentElement;

    const handleClick = () => {
      isAnimatingRef.current = !isAnimatingRef.current;
      if (isAnimatingRef.current) {
        animateRef.current();
      }
    };

    container.addEventListener('click', handleClick);

    return () => {
      container.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="rain-discount-container" style={{ cursor: 'pointer' }}>
      <canvas id="pourcentCanvas" ref={canvasRef} width="800" height="500"></canvas>
    </div>
  );
};

export default RainDiscount;
