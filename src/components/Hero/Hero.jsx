import React from 'react';
import './Hero.css';
import SearchForm from '../SearchForm/SearchForm';
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__text">
          <h1>Welcome</h1>
          <p>We provide the most movie db that suitable for our clients</p>
        </div>
        <div className="hero__search">{<SearchForm />}</div>
      </div>
    </section>
  );
}

export default Hero;
