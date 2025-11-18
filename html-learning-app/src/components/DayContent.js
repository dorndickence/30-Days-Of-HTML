import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getDayContent } from '../data/curriculum';
import './DayContent.css';

const DayContent = ({ dayNumber }) => {
  const dayData = getDayContent(dayNumber);

  if (!dayData) {
    return <div className="day-content"><h2>Day not found</h2></div>;
  }

  return (
    <div className="day-content">
      <div className="day-header">
        <h1>Day {dayData.day}: {dayData.title}</h1>
        <p className="day-description">{dayData.description}</p>
      </div>

      <div className="topics-overview">
        <h3>📚 Topics Covered:</h3>
        <ul>
          {dayData.topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>

      <div className="content-body">
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {dayData.content}
        </ReactMarkdown>
      </div>

      <div className="day-navigation">
        {dayNumber > 1 && (
          <span className="nav-hint">← Previous day</span>
        )}
        {dayNumber < 12 && (
          <span className="nav-hint">Next day →</span>
        )}
      </div>
    </div>
  );
};

export default DayContent;
