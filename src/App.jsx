import image from './testimg.png';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md p-4">
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-blue-500 hover:text-blue-700">A</Link></li>
            <li><Link to="/about" className="text-blue-500 hover:text-blue-700">B</Link></li>
            <img src={image} alt="テスト画像" className="w-64 h-64 mx-auto object-cover rounded-lg shadow-md" />
          </ul>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;