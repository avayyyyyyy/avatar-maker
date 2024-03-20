"use client";
import React from "react";

import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
    <div className="p-3 my-auto min-h-10 border rounded-md min-w-[60vw] hover:cursor-text shadow-lg border-secondary text-left">
      <Typewriter
        loop
        cursorBlinking
        cursor
        typeSpeed={40}
        words={[
          "closeup portrait of @me as a jedi with a lightsaber",
          "closeup portrait of @me as a samurai warrior",
          "closeup portrait of @me as a pirate",
          "closeup portrait of @me as a knight wearing a full suit of armor",
          "closeup portrait of @me as monster with glowing eyes and sharp teeth",
        ]}
      />
    </div>
  );
};

export default TypeWritter;
