import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <button className="cta-btn">Join Now</button>
        </div>
      </section>
      <section className="featured-content">
        <h2>Featured Content</h2>
        <div className="content-grid">
          <div className="content-item">
            <img src="movie1.jpg" alt="Movie 1" />
            <h3>Movie 1</h3>
            <p>Description of Movie 1</p>
          </div>
          {/* Add more content items */}
        </div>
      </section>
    </main>
  );
};

export default Body;