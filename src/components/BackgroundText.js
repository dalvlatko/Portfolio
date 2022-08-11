import React from "react";

export default function BackgroundText({ text, reps, bgTextColor, position }) {
  return (
    <div
      className={`z-0 text-[5rem] sm:text-[12rem] absolute select-none overflow-hidden break-all font-black ${bgTextColor} leading-none pl-3 sm:pl-12 ${position}`}
      data-nosnippet
    >
      {text.repeat(reps)}
    </div>
  );
}
