import React from "react";

export default function BackgroundText({ text }) {
  return (
    <div className="bg-text top-10">
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
