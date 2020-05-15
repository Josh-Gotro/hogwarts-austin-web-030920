import piggy from "../porco.png";
import React from "react";

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogfarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A dumb pig fart for people who love them</span>
    </div>
  );
};

export default Nav;
