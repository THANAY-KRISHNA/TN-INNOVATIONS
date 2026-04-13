import React, { useEffect, useState } from 'react';

const SpaceBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 150;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
        size: Math.random() * 2 + 1 + 'px',
        duration: Math.random() * 10 + 5 + 's',
        delay: Math.random() * 5 + 's'
      });
    }
    setStars(newStars);
  }, []);

  return (
    <div id="space-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
            animationDelay: star.delay
          }}
        />
      ))}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <style>{`
        .nebula {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          z-index: -1;
          pointer-events: none;
        }
        .nebula-1 {
          top: -10%;
          left: -10%;
          background: var(--accent-primary);
        }
        .nebula-2 {
          bottom: -10%;
          right: -10%;
          background: var(--accent-secondary);
        }
      `}</style>
    </div>
  );
};

export default SpaceBackground;
