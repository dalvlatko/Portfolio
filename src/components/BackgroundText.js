import React from "react";

export default function BackgroundText({
  text,
  reps2xl,
  repsxl,
  repsmd,
  repssm,
  reps,
  bgTextColor,
}) {
  return (
    <div
      className={`z-0 text-[5rem] sm:text-[12rem] absolute select-none overflow-hidden break-all font-black ${bgTextColor} leading-none top-10`}
    >
      <div className="hidden 2xl:block" data-nosnippet>
        {text.repeat(reps2xl)}
      </div>
      <div className="hidden xl:block 2xl:hidden" data-nosnippet>
        {text.repeat(repsxl)}
      </div>
      <div className="hidden md:block xl:hidden" data-nosnippet>
        {text.repeat(repsmd)}
      </div>
      <div className="hidden sm:block md:hidden" data-nosnippet>
        {text.repeat(repssm)}
      </div>
      <div className="block sm:hidden" data-nosnippet>
        {text.repeat(reps)}
      </div>
    </div>
  );
}
