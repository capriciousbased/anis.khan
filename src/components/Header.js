import React from "react";
import "./Header.css";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <div className="home">
      <h1 className="home-headline">Hello, I'm Anis</h1>
      <h3 className="home-text">
       Berlin based passionate and motivated <span>Devops Engineer</span> with a strong background in software development.
      </h3>
      <SocialLinks />
    </div>
  );
}
