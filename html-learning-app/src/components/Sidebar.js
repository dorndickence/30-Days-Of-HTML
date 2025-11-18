import React from 'react';
import { getAllDays } from '../data/curriculum';
import './Sidebar.css';

const Sidebar = ({ currentDay, onDayChange }) => {
  const days = getAllDays();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>30 Days of HTML</h2>
        <p className="subtitle">Learn HTML Step by Step</p>
      </div>
      <nav className="day-list">
        {days.map((day) => (
          <button
            key={day.day}
            className={`day-item ${currentDay === day.day ? 'active' : ''}`}
            onClick={() => onDayChange(day.day)}
          >
            <span className="day-number">Day {day.day}</span>
            <span className="day-title">{day.title}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <p>🚀 Keep Learning!</p>
      </div>
    </div>
  );
};

export default Sidebar;
