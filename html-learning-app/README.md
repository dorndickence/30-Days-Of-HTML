# 30 Days of HTML - Interactive Learning Application

A comprehensive, interactive React-based web application for learning HTML from basics to advanced concepts. This application transforms the "30 Days of HTML" curriculum into an engaging, hands-on learning experience.

## 🌟 Features

### 📖 Interactive Lessons
- **12 Days of Structured Content**: Learn HTML through a well-organized, day-by-day curriculum
- **Beautiful Markdown Rendering**: Content displayed with syntax-highlighted code examples
- **Topic Overview**: Each day shows what topics will be covered
- **Easy Navigation**: Sidebar navigation to quickly jump between days

### 🎨 Live HTML Playground
- **Real-time Code Editor**: Write HTML code and see instant results
- **Split View**: Code editor on the left, live preview on the right
- **Reset Functionality**: Quick reset to start fresh
- **Safe Sandbox**: Preview runs in an isolated iframe environment

### 📊 Progress Tracking
- **Visual Progress Bar**: Track your learning journey with an animated progress indicator
- **Day-by-Day Checkboxes**: Mark completed days as you go
- **Local Storage**: Your progress is saved automatically and persists across sessions
- **Completion Celebration**: Special message when you complete all 12 days!

### 🎯 Key Topics Covered

1. **Day 1**: Introduction to Web Development
2. **Day 2**: HTML Basics - Elements, Attributes, Comments
3. **Day 3**: DOM & Document Structure
4. **Day 4**: Block vs Inline Elements
5. **Day 5**: HTML5 Formatting Elements
6. **Day 6**: Semantic Elements
7. **Day 7**: Document Metadata & SEO
8. **Day 8**: HTML Forms & Input Types
9. **Day 9**: HTML Tables
10. **Day 10**: HTML Lists (Ordered, Unordered, Description)
11. **Day 11**: Links & File Paths
12. **Day 12**: Advanced HTML (Multimedia, Canvas, SVG)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the application directory:
```bash
cd html-learning-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 User Interface

The application features a modern, responsive design with:
- **Purple Gradient Theme**: Eye-catching purple gradient sidebar and buttons
- **Clean Layout**: Distraction-free content area for focused learning
- **Smooth Animations**: Polished transitions and hover effects
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📚 Application Structure

```
html-learning-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Sidebar.js          # Day navigation sidebar
│   │   ├── Sidebar.css
│   │   ├── DayContent.js       # Lesson content display
│   │   ├── DayContent.css
│   │   ├── CodePlayground.js   # Live HTML editor
│   │   ├── CodePlayground.css
│   │   ├── ProgressTracker.js  # Progress tracking
│   │   └── ProgressTracker.css
│   ├── data/
│   │   └── curriculum.js       # All lesson content
│   ├── App.js                  # Main application component
│   ├── App.css                 # Global styles
│   └── index.js                # React entry point
├── package.json
└── README.md
```

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **React Markdown**: Markdown rendering for lesson content
- **React Syntax Highlighter**: Beautiful code syntax highlighting
- **CSS3**: Custom styling with gradients and animations

## 💡 Usage Tips

1. **Start with Day 1**: Begin your journey from the introduction
2. **Use the Playground**: After each lesson, practice in the playground
3. **Track Your Progress**: Check off days as you complete them
4. **Experiment**: The playground is safe - try different HTML structures!
5. **Take Your Time**: Quality learning is better than rushing through

## 🎓 Learning Path

Each day builds upon previous knowledge:
- Days 1-3: Foundation (Web basics, HTML structure, DOM)
- Days 4-6: Core concepts (Elements, formatting, semantics)
- Days 7-9: Essential features (Metadata, forms, tables)
- Days 10-12: Advanced topics (Lists, links, multimedia)

## 🤝 Contributing

This is an educational project. Feel free to:
- Add more content to the curriculum
- Improve the UI/UX
- Fix bugs or typos
- Enhance the code playground
- Add new features

## 📝 License

This project is part of the 30 Days of HTML challenge.

## 🙏 Acknowledgments

- Based on the original "30 Days of HTML" curriculum
- Built with Create React App
- Code highlighting powered by Prism
- Markdown rendering by react-markdown

## 📞 Support

If you encounter issues or have questions:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Try clearing browser cache and localStorage
4. Rebuild the application

---

**Happy Learning! 🎉**

Start your HTML journey today and become a web development pro in 30 days!
