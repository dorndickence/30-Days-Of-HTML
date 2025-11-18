import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DayContent from './components/DayContent';
import CodePlayground from './components/CodePlayground';
import ProgressTracker from './components/ProgressTracker';
import './App.css';

function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const [completedDays, setCompletedDays] = useState(() => {
    const saved = localStorage.getItem('completedDays');
    return saved ? JSON.parse(saved) : [];
  });
  const [currentView, setCurrentView] = useState('lesson');

  useEffect(() => {
    localStorage.setItem('completedDays', JSON.stringify(completedDays));
  }, [completedDays]);

  const handleDayChange = (day) => {
    setCurrentDay(day);
    setCurrentView('lesson');
  };

  const toggleDayCompletion = (day) => {
    setCompletedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <Router>
      <div className="app">
        <Sidebar currentDay={currentDay} onDayChange={handleDayChange} />
        <div className="main-content">
          <nav className="top-nav">
            <button
              className={currentView === 'lesson' ? 'active' : ''}
              onClick={() => setCurrentView('lesson')}
            >
              📖 Lesson
            </button>
            <button
              className={currentView === 'playground' ? 'active' : ''}
              onClick={() => setCurrentView('playground')}
            >
              🎨 Playground
            </button>
            <button
              className={currentView === 'progress' ? 'active' : ''}
              onClick={() => setCurrentView('progress')}
            >
              📊 Progress
            </button>
          </nav>
          <div className="content-area">
            {currentView === 'lesson' && <DayContent dayNumber={currentDay} />}
            {currentView === 'playground' && <CodePlayground />}
            {currentView === 'progress' && (
              <ProgressTracker
                completedDays={completedDays}
                onToggleDay={toggleDayCompletion}
              />
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
