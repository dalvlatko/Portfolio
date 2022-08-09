import React from "react";

export default function BackgroundText({ text }) {
  return (
    <div className="z-0 absolute select-none overflow-hidden break-all font-black text-[12rem] text-[#fa6565] leading-none top-10">
      <div className="hidden 2xl:block" data-nosnippet>
        {text.repeat(15)}
      </div>
      <div className="hidden xl:block 2xl:hidden" data-nosnippet>
        {text.repeat(8)}
      </div>
      <div className="hidden md:block xl:hidden" data-nosnippet>
        {text.repeat(5)}
      </div>
      <div className="block md:hidden" data-nosnippet>
        {text.repeat(2)}
      </div>
    </div>
  );
}
