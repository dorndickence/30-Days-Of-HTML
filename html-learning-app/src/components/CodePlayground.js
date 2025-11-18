import React, { useState, useEffect } from 'react';
import './CodePlayground.css';

const CodePlayground = () => {
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Playground</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML Playground!</h1>
    <p>Edit the code on the left to see changes here.</p>
    <button onclick="alert('Hello from HTML!')">Click Me!</button>
</body>
</html>`);

  const [output, setOutput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setOutput(htmlCode);
    }, 500);

    return () => clearTimeout(timer);
  }, [htmlCode]);

  const handleReset = () => {
    setHtmlCode(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Playground</title>
</head>
<body>
    <h1>Start coding here!</h1>
</body>
</html>`);
  };

  return (
    <div className="code-playground">
      <div className="playground-header">
        <h2>🎨 HTML Playground</h2>
        <button onClick={handleReset} className="reset-btn">Reset Code</button>
      </div>
      <div className="playground-container">
        <div className="code-editor">
          <h3>HTML Code</h3>
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            spellCheck="false"
          />
        </div>
        <div className="code-preview">
          <h3>Live Preview</h3>
          <iframe
            title="HTML Preview"
            srcDoc={output}
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;
