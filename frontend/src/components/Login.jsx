import React, { useState, useEffect } from 'react';
import '../styles/Auth.css';
import slide1 from '../assets/slide1.avif'; 
import slide2 from '../assets/slide2.avif';
import slide3 from '../assets/slide3.avif'; 
import slide4 from '../assets/slide4.avif'; 

function Login() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3, slide4]; // Add all your image paths here

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className="auth-container">
      <div className="left-section">
        <div className="slider">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </div>
      <div className="right-section">
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="hello@example.com" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
            <button type="submit" className="join-btn">Sign In</button>
          </form>
          <p>
            Don’t have an account? <a href="/register">Register here</a>
          </p>
          <p>
            By signing in, you agree to the <a href="#">Terms and Conditions</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
