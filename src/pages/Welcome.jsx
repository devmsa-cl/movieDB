import React from "react";
import MoviesSlide from "../components/MovieSlide/MoviesSlide";
import Hero from "../components/Hero/Hero";
function Welcome() {
  return (
    <>
      <Hero />
      <main>
        <div className="container">
          <MoviesSlide
            category={{ title: "What's popular", type: "popular" }}
          />
          <MoviesSlide category={{ title: "Upcoming", type: "upcoming" }} />
          <MoviesSlide category={{ title: "Trending", type: "trending" }} />
        </div>
      </main>
    </>
  );
}

export default Welcome;
