import * as React from "react";
import NavBar from "./molecules/NavBar";

interface HeaderProps {
  overlayRef: React.RefObject<HTMLDivElement>;
}

const Header = (props: HeaderProps) => {
  return (
    <header id="header">
      <div ref={props.overlayRef} className="header-overlay" />
      <NavBar />
      <div className="front">
        <h1>Effortless to the perfect Tenant</h1>
        <h3>Find suitable tenants directly and without mass visitation.</h3>
        <button>Find Tenants Now</button>
      </div>
      <div className="benefits">
        <ul>
          <li>No Subscription</li>
          <li>No running advertisement costs</li>
          <li>Free to successful</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
