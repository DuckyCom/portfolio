import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "Tu Alumno Favorito ;)😉",
            "Full Stack Developer",
            "UX/UI Designer",
            "Videogame Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;