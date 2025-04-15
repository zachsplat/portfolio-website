import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Zachary Alexander</h1>
        <p>Software Engineer | Digital Media Specialist | Entrepreneur</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>Versatile professional with a unique blend of software engineering, digital media, and entrepreneurial experience.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>E-commerce Demo</li>
          <li>IoT & Networking Projects</li>
          <li>Creative Portfolio</li>
          <li>Algorithm Challenges</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zalexander14@icloud.com">zalexander14@icloud.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zachary-alexander-43b264219" target="_blank" rel="noopener noreferrer">zachary-alexander-43b264219</a></p>
      </section>
    </div>
  );
}

export default App;
