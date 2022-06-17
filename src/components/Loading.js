import React from "react";
import rings from "../images/rings.svg";


export default function Loading() {
  return (
    <main>
        <h1>Loading...</h1>
        <img
        src={rings}
        alt="Loading icon"
        className=""
      />
    </main>
  );
}
