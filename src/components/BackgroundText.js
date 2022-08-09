import React from "react";

export default function BackgroundText({
  text,
  reps2xl,
  repsxl,
  repsmd,
  reps,
  style,
}) {
  return (
    <div
      className={`z-0 absolute select-none overflow-hidden break-all font-black text-[12rem] text-[${style}] leading-none top-10`}
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
      <div className="block md:hidden" data-nosnippet>
        {text.repeat(reps)}
      </div>
    </div>
  );
}
