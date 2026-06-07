import { useEffect, useState } from 'react';
import './Loader.css';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => onFinish(), 600);
          }, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loader-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-letter">N</span>
          <span className="loader-letter">V</span>
          <span className="loader-letter">V</span>
        </div>
        <div className="loader-bar-track">
          <div className="loader-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader-text">{progress}%</p>
      </div>
      <div className="loader-orb loader-orb-1" />
      <div className="loader-orb loader-orb-2" />
    </div>
  );
}
