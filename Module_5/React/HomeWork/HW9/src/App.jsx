import { useState, useEffect } from 'react';
import "./App.css";
import Loading from './components/Loading/Loading';
import Quiz from './components/Quiz/Quiz';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='app-container'>{loading ? <Loading /> : <Quiz />}</div>
  );
}

export default App;