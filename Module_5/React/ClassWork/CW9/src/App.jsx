import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [animationClass, setAnimationClass] = useState('fade-in');

  useState(() => {
    const timer = setTimeout(() => {
      setAnimationClass('fade-out');
      setTimeout(() => {
        setShowWelcome(false);
        setAnimationClass('fade-in');
      }, 1000);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='app-container'>
      {showWelcome ? (
        <div className={animationClass}>
        <Welcome />
      </div>
      ) : (
        <div className={animationClass}>
          <Home />
        </div>
      )}
    </div>
  )
}

export default App; 