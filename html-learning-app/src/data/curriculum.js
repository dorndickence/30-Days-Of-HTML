export const curriculum = [
  {
    day: 1,
    title: "Introduction",
    topics: [
      "Web Development Overview",
      "Frontend, Backend, and Full-stack",
      "How the Web Works",
      "Web Development Tools"
    ],
    description: "Learn about web development, understand how the web works, and get familiar with the tools needed to start your HTML journey.",
    content: `# Day 1: Introduction

Welcome to 30 Days of HTML! In this challenge, you will learn everything you need to know about HTML and web development fundamentals.

## What You'll Learn

- Understanding how the web works
- Frontend, Backend, and Full-stack development
- Web development tools and setup
- Parts of a website

## Web Development

Web development is the process of designing, building, testing, and maintaining websites. It ranges from simple static websites to complex full-stack applications.

### Frontend Development
Frontend (client-side) is what users see and interact with. It includes:
- **HTML** - Structure
- **CSS** - Styling  
- **JavaScript** - Interactivity

### Backend Development
Backend (server-side) handles data processing, databases, and server logic.

### Full-stack Development
Full-stack combines both frontend and backend development skills.

## Requirements
- Motivation
- Computer
- Internet
- Browser (Chrome, Firefox, Safari, etc.)
- Code Editor (VS Code recommended)

Ready to start your journey? Let's dive in! 🚀`
  },
  {
    day: 2,
    title: "HTML Basics",
    topics: [
      "Setting Up Development Environment",
      "Introduction to HTML",
      "HTML Elements",
      "Attributes and Comments"
    ],
    description: "Set up your development environment and learn HTML basics including elements, attributes, and comments.",
    content: `# Day 2: HTML Basics

## Setting Development Environment

### Browser
Choose a modern browser: Chrome, Firefox, Safari, or Edge.

### Code Editor
We recommend Visual Studio Code - it's free, powerful, and has excellent HTML support.

## What is HTML?

HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page.

## HTML Element

An HTML element consists of:
- **Opening tag**: \`<tagname>\`
- **Content**: The content inside
- **Closing tag**: \`</tagname>\`

Example:
\`\`\`html
<p>This is a paragraph</p>
\`\`\`

## Attributes

Attributes provide additional information about elements:
\`\`\`html
<a href="https://example.com">Click here</a>
\`\`\`

## HTML Comment

Comments help document your code:
\`\`\`html
<!-- This is a comment -->
\`\`\`

## Basic HTML Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>
\`\`\``
  },
  {
    day: 3,
    title: "DOM & Structure",
    topics: [
      "Document Object Model (DOM)",
      "HTML Document Declaration",
      "Heading Elements",
      "Paragraph and Section Elements",
      "Header, Main, Footer"
    ],
    description: "Understand the DOM and learn about HTML document structure including semantic elements.",
    content: `# Day 3: DOM & Structure

## DOM (Document Object Model)

The DOM is a programming interface for HTML documents. It represents the page structure as a tree of objects.

## HTML Document Structure

### Declaration
\`\`\`html
<!DOCTYPE html>
\`\`\`
Declares that this is an HTML5 document.

### Root Element
\`\`\`html
<html lang="en">
  <!-- All content goes here -->
</html>
\`\`\`

### Heading Elements
HTML has 6 heading levels:
\`\`\`html
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Sub-subheading</h3>
<!-- h4, h5, h6 -->
\`\`\`

### Paragraph Element
\`\`\`html
<p>This is a paragraph of text.</p>
\`\`\`

### Semantic Structure

\`\`\`html
<header>
  <!-- Navigation, logo, site header -->
</header>

<main>
  <section>
    <!-- Main content sections -->
  </section>
</main>

<footer>
  <!-- Copyright, links, footer info -->
</footer>
\`\`\`

### Inline Styles
\`\`\`html
<p style="color: blue; font-size: 16px;">Styled paragraph</p>
\`\`\``
  },
  {
    day: 4,
    title: "Block vs Inline Elements",
    topics: [
      "Block-level Elements",
      "Inline Elements",
      "Differences and Usage"
    ],
    description: "Learn the difference between block-level and inline elements and when to use each.",
    content: `# Day 4: Block vs Inline Elements

## Block-level Elements

Block elements take up the full width available and always start on a new line.

**Common block elements:**
- \`<div>\` - Generic container
- \`<p>\` - Paragraph
- \`<h1>\` to \`<h6>\` - Headings
- \`<section>\`, \`<article>\`, \`<header>\`, \`<footer>\`
- \`<ul>\`, \`<ol>\`, \`<li>\` - Lists

Example:
\`\`\`html
<div>
  <p>This is a block element.</p>
  <p>This starts on a new line.</p>
</div>
\`\`\`

## Inline Elements

Inline elements only take up as much width as necessary and don't start on a new line.

**Common inline elements:**
- \`<span>\` - Generic inline container
- \`<a>\` - Links
- \`<strong>\`, \`<em>\` - Text formatting
- \`<img>\` - Images
- \`<input>\`, \`<button>\` - Form elements

Example:
\`\`\`html
<p>This is <strong>bold</strong> and this is <em>italic</em> text.</p>
\`\`\`

## Key Differences

| Block | Inline |
|-------|--------|
| Takes full width | Takes only needed width |
| Starts on new line | Continues on same line |
| Can contain block and inline | Usually contains only inline |

## Mixing Block and Inline

\`\`\`html
<div>
  <h2>Heading (block)</h2>
  <p>Text with <a href="#">inline link</a> inside.</p>
</div>
\`\`\``
  },
  {
    day: 5,
    title: "HTML5 Formatting",
    topics: [
      "Text Formatting Elements",
      "Bold, Italic, Underline",
      "Subscript and Superscript",
      "Mark and Delete"
    ],
    description: "Master HTML5 text formatting elements for styling and emphasizing content.",
    content: `# Day 5: HTML5 Formatting Elements

## Text Formatting

HTML provides various elements to format text:

### Bold and Strong
\`\`\`html
<b>Bold text</b> (visual only)
<strong>Strong importance</strong> (semantic)
\`\`\`

### Italic and Emphasis
\`\`\`html
<i>Italic text</i> (visual only)
<em>Emphasized text</em> (semantic)
\`\`\`

### Underline
\`\`\`html
<u>Underlined text</u>
\`\`\`

### Strikethrough
\`\`\`html
<s>Strikethrough text</s>
<del>Deleted text</del>
\`\`\`

### Subscript and Superscript
\`\`\`html
H<sub>2</sub>O (subscript)
X<sup>2</sup> (superscript)
\`\`\`

### Highlight
\`\`\`html
<mark>Highlighted text</mark>
\`\`\`

### Small Text
\`\`\`html
<small>Fine print</small>
\`\`\`

### Code and Preformatted
\`\`\`html
<code>const x = 10;</code>

<pre>
  Preformatted text
  preserves spaces
  and line breaks
</pre>
\`\`\`

### Quotations
\`\`\`html
<blockquote>
  Long quotation
</blockquote>

<q>Short inline quote</q>
\`\`\`

## Example Usage

\`\`\`html
<article>
  <h2>Chemical Formula</h2>
  <p>Water is H<sub>2</sub>O</p>
  <p>Einstein's equation: E = mc<sup>2</sup></p>
  <p><mark>Important:</mark> <strong>Always</strong> test your code!</p>
</article>
\`\`\``
  },
  {
    day: 6,
    title: "Semantic Elements",
    topics: [
      "Importance of Semantics",
      "Article, Section, Nav",
      "Aside, Figure, Figcaption",
      "Time, Address"
    ],
    description: "Learn HTML5 semantic elements that provide meaning to your content structure.",
    content: `# Day 6: HTML5 Semantic Elements

## Why Semantics Matter

Semantic elements clearly describe their meaning to both browsers and developers, improving:
- **SEO** (Search Engine Optimization)
- **Accessibility** (Screen readers)
- **Code readability**

## Main Semantic Elements

### Article
Self-contained, independent content:
\`\`\`html
<article>
  <h2>Blog Post Title</h2>
  <p>Post content...</p>
</article>
\`\`\`

### Section
Thematic grouping of content:
\`\`\`html
<section>
  <h2>Chapter 1</h2>
  <p>Chapter content...</p>
</section>
\`\`\`

### Nav
Navigation links:
\`\`\`html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>
\`\`\`

### Aside
Content tangentially related to main content:
\`\`\`html
<aside>
  <h3>Related Links</h3>
  <ul>
    <li><a href="#">Link 1</a></li>
  </ul>
</aside>
\`\`\`

### Figure and Figcaption
Images with captions:
\`\`\`html
<figure>
  <img src="image.jpg" alt="Description">
  <figcaption>Image caption</figcaption>
</figure>
\`\`\`

### Other Semantic Elements

\`\`\`html
<time datetime="2024-01-01">January 1, 2024</time>

<address>
  Contact: email@example.com
</address>

<details>
  <summary>Click to expand</summary>
  <p>Hidden content</p>
</details>
\`\`\`

## Semantic Page Structure

\`\`\`html
<body>
  <header>
    <nav><!-- Navigation --></nav>
  </header>
  
  <main>
    <article>
      <section><!-- Content --></section>
    </article>
    <aside><!-- Sidebar --></aside>
  </main>
  
  <footer><!-- Footer --></footer>
</body>
\`\`\``
  },
  {
    day: 7,
    title: "Document Metadata",
    topics: [
      "Meta Tags",
      "Character Encoding",
      "SEO Meta Tags",
      "Linking External Resources"
    ],
    description: "Understand HTML document metadata, meta tags, and how to optimize for search engines.",
    content: `# Day 7: HTML Document Metadata

## The Head Section

The \`<head>\` contains metadata about the document.

## Essential Meta Tags

### Character Encoding
\`\`\`html
<meta charset="UTF-8">
\`\`\`

### Viewport (Responsive Design)
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

### SEO Meta Tags

\`\`\`html
<meta name="description" content="Page description for search engines">
<meta name="keywords" content="HTML, CSS, Web Development">
<meta name="author" content="Your Name">
\`\`\`

### Social Media Meta Tags

\`\`\`html
<!-- Open Graph (Facebook) -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="image-url.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Page Title">
\`\`\`

## Linking External Resources

### Stylesheets
\`\`\`html
<link rel="stylesheet" href="styles.css">
\`\`\`

### Favicon
\`\`\`html
<link rel="icon" href="favicon.ico">
\`\`\`

### Fonts
\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
\`\`\`

## Scripts

\`\`\`html
<script src="script.js"></script>
<script src="script.js" defer></script>
<script src="script.js" async></script>
\`\`\`

## Base URL

\`\`\`html
<base href="https://example.com/" target="_blank">
\`\`\`

## Complete Example

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML in 30 days">
  <meta name="keywords" content="HTML, Tutorial, Web Development">
  <meta name="author" content="Your Name">
  <title>30 Days Of HTML</title>
  <link rel="stylesheet" href="styles.css">
  <link rel="icon" href="favicon.ico">
</head>
<body>
  <!-- Content -->
</body>
</html>
\`\`\``
  },
  {
    day: 8,
    title: "HTML Forms",
    topics: [
      "Form Element",
      "Input Types",
      "Form Validation",
      "Labels and Fieldsets"
    ],
    description: "Create interactive forms with various input types and validation.",
    content: `# Day 8: HTML Forms

## Form Basics

Forms collect user input:
\`\`\`html
<form action="/submit" method="POST">
  <!-- Form controls here -->
</form>
\`\`\`

## Input Types

### Text Input
\`\`\`html
<label for="name">Name:</label>
<input type="text" id="name" name="name" placeholder="Your name">
\`\`\`

### Email
\`\`\`html
<input type="email" name="email" placeholder="email@example.com">
\`\`\`

### Password
\`\`\`html
<input type="password" name="password">
\`\`\`

### Number
\`\`\`html
<input type="number" name="age" min="1" max="120">
\`\`\`

### Date and Time
\`\`\`html
<input type="date" name="birthdate">
<input type="time" name="appointment">
<input type="datetime-local" name="meeting">
\`\`\`

### Radio Buttons
\`\`\`html
<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>

<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>
\`\`\`

### Checkboxes
\`\`\`html
<input type="checkbox" id="html" name="skills" value="html">
<label for="html">HTML</label>

<input type="checkbox" id="css" name="skills" value="css">
<label for="css">CSS</label>
\`\`\`

### Select Dropdown
\`\`\`html
<select name="country">
  <option value="">Select Country</option>
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
  <option value="ca">Canada</option>
</select>
\`\`\`

### Textarea
\`\`\`html
<textarea name="message" rows="5" cols="30" placeholder="Your message"></textarea>
\`\`\`

### File Upload
\`\`\`html
<input type="file" name="document">
\`\`\`

### Color Picker
\`\`\`html
<input type="color" name="favcolor">
\`\`\`

## Form Attributes

### Required
\`\`\`html
<input type="text" name="username" required>
\`\`\`

### Pattern
\`\`\`html
<input type="text" pattern="[A-Za-z]{3,}" title="At least 3 letters">
\`\`\`

### Min/Max Length
\`\`\`html
<input type="text" minlength="5" maxlength="20">
\`\`\`

## Submit Button
\`\`\`html
<input type="submit" value="Submit">
<!-- OR -->
<button type="submit">Submit</button>
\`\`\`

## Complete Form Example

\`\`\`html
<form action="/register" method="POST">
  <fieldset>
    <legend>Registration Form</legend>
    
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <button type="submit">Register</button>
  </fieldset>
</form>
\`\`\``
  },
  {
    day: 9,
    title: "HTML Tables",
    topics: [
      "Table Structure",
      "Table Headers",
      "Table Body and Footer",
      "Colspan and Rowspan"
    ],
    description: "Learn to create and structure data tables with headers, body, and advanced features.",
    content: `# Day 9: HTML Tables

## Basic Table Structure

\`\`\`html
<table>
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
  <tr>
    <td>Cell 3</td>
    <td>Cell 4</td>
  </tr>
</table>
\`\`\`

## Table with Headers

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>USA</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>25</td>
      <td>Spain</td>
    </tr>
  </tbody>
</table>
\`\`\`

## Table with Footer

\`\`\`html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Product 1</td>
      <td>$10</td>
    </tr>
    <tr>
      <td>Product 2</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$30</td>
    </tr>
  </tfoot>
</table>
\`\`\`

## Colspan and Rowspan

### Colspan (spans across columns)
\`\`\`html
<table>
  <tr>
    <th colspan="2">Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>First Name</td>
    <td>Last Name</td>
    <td>30</td>
  </tr>
</table>
\`\`\`

### Rowspan (spans across rows)
\`\`\`html
<table>
  <tr>
    <td rowspan="2">John Doe</td>
    <td>Email</td>
    <td>john@example.com</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>123-456-7890</td>
  </tr>
</table>
\`\`\`

## Table Caption

\`\`\`html
<table>
  <caption>Employee Information</caption>
  <tr>
    <th>Name</th>
    <th>Department</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>Engineering</td>
  </tr>
</table>
\`\`\`

## Styled Table Example

\`\`\`html
<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
\`\`\`

**Note:** Use CSS for styling instead of HTML attributes in modern web development!`
  },
  {
    day: 10,
    title: "HTML Lists",
    topics: [
      "Ordered Lists",
      "Unordered Lists",
      "Description Lists",
      "Nested Lists"
    ],
    description: "Master different types of HTML lists for organizing content.",
    content: `# Day 10: HTML Lists

## Ordered Lists (Numbered)

\`\`\`html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
\`\`\`

### Ordered List Types

\`\`\`html
<!-- Numbers (default) -->
<ol type="1">
  <li>Item</li>
</ol>

<!-- Uppercase letters -->
<ol type="A">
  <li>Item</li>
</ol>

<!-- Lowercase letters -->
<ol type="a">
  <li>Item</li>
</ol>

<!-- Uppercase Roman -->
<ol type="I">
  <li>Item</li>
</ol>

<!-- Lowercase Roman -->
<ol type="i">
  <li>Item</li>
</ol>
\`\`\`

### Start Attribute

\`\`\`html
<ol start="5">
  <li>This is item 5</li>
  <li>This is item 6</li>
</ol>
\`\`\`

## Unordered Lists (Bulleted)

\`\`\`html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
\`\`\`

### List Style Types

\`\`\`html
<!-- Disc (default) -->
<ul style="list-style-type: disc;">
  <li>Item</li>
</ul>

<!-- Circle -->
<ul style="list-style-type: circle;">
  <li>Item</li>
</ul>

<!-- Square -->
<ul style="list-style-type: square;">
  <li>Item</li>
</ul>

<!-- None -->
<ul style="list-style-type: none;">
  <li>Item</li>
</ul>
\`\`\`

## Description Lists

Used for term-definition pairs:

\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
  
  <dt>JavaScript</dt>
  <dd>Programming language for web interactivity</dd>
</dl>
\`\`\`

## Nested Lists

\`\`\`html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
      <li>Ruby</li>
    </ul>
  </li>
</ul>
\`\`\`

## Mixed Nested Lists

\`\`\`html
<ol>
  <li>Prepare ingredients
    <ul>
      <li>2 eggs</li>
      <li>1 cup flour</li>
      <li>1/2 cup milk</li>
    </ul>
  </li>
  <li>Mix ingredients</li>
  <li>Cook for 20 minutes</li>
</ol>
\`\`\`

## Navigation Menu Example

\`\`\`html
<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a>
      <ul>
        <li><a href="#web">Web Design</a></li>
        <li><a href="#mobile">Mobile Apps</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
\`\`\``
  },
  {
    day: 11,
    title: "Links & Paths",
    topics: [
      "Absolute vs Relative Paths",
      "Anchor Links",
      "Email and Phone Links",
      "File Paths Best Practices"
    ],
    description: "Understand file paths and create various types of links in HTML.",
    content: `# Day 11: File Paths and Links

## URL and File Paths

### Absolute Path
Full URL including protocol:
\`\`\`html
<a href="https://www.example.com/page.html">External Link</a>
<img src="https://www.example.com/images/photo.jpg" alt="Photo">
\`\`\`

### Relative Path

**Same directory:**
\`\`\`html
<a href="page.html">Link</a>
<img src="image.jpg" alt="Image">
\`\`\`

**Subdirectory:**
\`\`\`html
<a href="pages/about.html">About</a>
<img src="images/logo.png" alt="Logo">
\`\`\`

**Parent directory:**
\`\`\`html
<a href="../index.html">Home</a>
<img src="../assets/banner.jpg" alt="Banner">
\`\`\`

**Root directory:**
\`\`\`html
<a href="/index.html">Home</a>
<img src="/images/logo.png" alt="Logo">
\`\`\`

## Types of Links

### Basic Link
\`\`\`html
<a href="https://example.com">Visit Example</a>
\`\`\`

### Open in New Tab
\`\`\`html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in New Tab
</a>
\`\`\`

### Email Link
\`\`\`html
<a href="mailto:email@example.com">Send Email</a>
<a href="mailto:email@example.com?subject=Hello&body=Message">Send Email with Subject</a>
\`\`\`

### Phone Link
\`\`\`html
<a href="tel:+1234567890">Call Us</a>
\`\`\`

### Anchor Link (Same Page)
\`\`\`html
<a href="#section1">Go to Section 1</a>

<!-- Later in the page -->
<section id="section1">
  <h2>Section 1</h2>
</section>
\`\`\`

### Download Link
\`\`\`html
<a href="document.pdf" download>Download PDF</a>
<a href="image.jpg" download="custom-name.jpg">Download Image</a>
\`\`\`

## Link Attributes

\`\`\`html
<a 
  href="https://example.com" 
  target="_blank"           <!-- Open in new tab -->
  rel="noopener noreferrer" <!-- Security for target="_blank" -->
  title="Visit Example"     <!-- Tooltip text -->
  hreflang="en"            <!-- Language of linked page -->
>
  Link Text
</a>
\`\`\`

## Image as Link

\`\`\`html
<a href="https://example.com">
  <img src="banner.jpg" alt="Click to visit">
</a>
\`\`\`

## Navigation Example

\`\`\`html
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/services">Services</a>
  <a href="/contact">Contact</a>
</nav>
\`\`\`

## File Path Structure Example

\`\`\`
project/
├── index.html
├── about.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    └── logo.png
\`\`\`

From \`index.html\`:
\`\`\`html
<link rel="stylesheet" href="css/style.css">
<script src="js/script.js"></script>
<img src="images/logo.png" alt="Logo">
\`\`\``
  },
  {
    day: 12,
    title: "Advanced HTML",
    topics: [
      "HTML Entities",
      "Iframe",
      "Audio and Video",
      "Canvas and SVG Basics"
    ],
    description: "Explore advanced HTML features including multimedia, iframes, and special characters.",
    content: `# Day 12: Advanced HTML Elements

## HTML Entities

Special characters that need to be encoded:

\`\`\`html
&lt;    <!-- < -->
&gt;    <!-- > -->
&amp;   <!-- & -->
&quot;  <!-- " -->
&apos;  <!-- ' -->
&nbsp;  <!-- non-breaking space -->
&copy;  <!-- © -->
&reg;   <!-- ® -->
&trade; <!-- ™ -->
\`\`\`

## Iframe

Embed another HTML page:

\`\`\`html
<iframe 
  src="https://www.example.com" 
  width="600" 
  height="400"
  title="Description"
  loading="lazy"
></iframe>
\`\`\`

### YouTube Video Embed
\`\`\`html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  title="YouTube video"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen
></iframe>
\`\`\`

## Audio

\`\`\`html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
\`\`\`

### Audio Attributes
\`\`\`html
<audio 
  src="audio.mp3" 
  controls 
  autoplay 
  loop 
  muted
  preload="auto"
>
</audio>
\`\`\`

## Video

\`\`\`html
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
\`\`\`

### Video Attributes
\`\`\`html
<video 
  src="video.mp4" 
  width="640" 
  height="360"
  controls 
  autoplay 
  loop 
  muted 
  poster="thumbnail.jpg"
  preload="metadata"
>
</video>
\`\`\`

## Picture Element (Responsive Images)

\`\`\`html
<picture>
  <source media="(min-width: 650px)" srcset="large.jpg">
  <source media="(min-width: 465px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description" style="width:auto;">
</picture>
\`\`\`

## SVG (Scalable Vector Graphics)

\`\`\`html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="red" />
</svg>
\`\`\`

## Canvas

\`\`\`html
<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;">
  Your browser does not support the canvas element.
</canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(10, 10, 150, 80);
</script>
\`\`\`

## Progress and Meter

\`\`\`html
<progress value="70" max="100">70%</progress>

<meter value="0.6" min="0" max="1">60%</meter>
\`\`\`

## Details and Summary

\`\`\`html
<details>
  <summary>Click to expand</summary>
  <p>Hidden content that appears when expanded.</p>
</details>
\`\`\`

## Dialog

\`\`\`html
<dialog id="myDialog">
  <p>This is a dialog</p>
  <button onclick="document.getElementById('myDialog').close()">Close</button>
</dialog>

<button onclick="document.getElementById('myDialog').showModal()">
  Open Dialog
</button>
\`\`\`

Congratulations! You've completed the 30 Days of HTML curriculum! 🎉`
  }
];

export const getDayContent = (dayNumber) => {
  return curriculum.find(day => day.day === dayNumber) || null;
};

export const getAllDays = () => {
  return curriculum.map(day => ({
    day: day.day,
    title: day.title,
    topics: day.topics
  }));
};
