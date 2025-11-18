import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ completedDays, onToggleDay, totalDays = 12 }) => {
  const progress = (completedDays.length / totalDays) * 100;

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <h3>📊 Your Progress</h3>
        <span className="progress-text">
          {completedDays.length} / {totalDays} days completed
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}>
          {progress > 5 && <span>{Math.round(progress)}%</span>}
        </div>
      </div>
      <div className="day-checkboxes">
        {Array.from({ length: totalDays }, (_, i) => i + 1).map((day) => (
          <label key={day} className="day-checkbox">
            <input
              type="checkbox"
              checked={completedDays.includes(day)}
              onChange={() => onToggleDay(day)}
            />
            <span className="checkbox-label">Day {day}</span>
          </label>
        ))}
      </div>
      {progress === 100 && (
        <div className="completion-message">
          🎉 Congratulations! You've completed all 30 Days of HTML! 🎉
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
