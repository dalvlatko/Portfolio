import React from "react";
import { SocialIcon } from "react-social-icons";

let socialLinks = [
  "https://instagram.com/dalvlatko",
  "https://github.com/dalvlatko",
  "https://linkedin.com/in/vladimir-icovski",
  "mailto:vladimir.icovski@gmail.com",
];

export default function Socials() {
  return (
    <div>
      {socialLinks.map((link) => (
        <SocialIcon
          url={link}
          className="m-3"
          target="_blank"
          fgColor="white"
        />
      ))}
    </div>
  );
}
