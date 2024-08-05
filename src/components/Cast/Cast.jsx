import React from "react";
import "./Cast.css";
function Cast({ cast }) {
  return (
    <section id="cast">
      <div className="container">
        <h2 className="heading-text">Caster</h2>
        <div className="cast slide">
          {cast.map((c) => {
            const { character, name, profile_path } = c;
            return (
              <div className="cast__item" key={c.id}>
                <img
                  src={`${
                    profile_path !== null
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : "../caster.jpeg"
                  }`}
                  alt={name}
                />
                <h2>{name}</h2>
                <p>{character}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Cast;
