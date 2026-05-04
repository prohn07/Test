import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Routee from "./Routee";

import "./App.css";

function App() {
  return (
    <>
      <NavLink to={`/child1`}>child2</NavLink>
      <NavLink to={`/`}>child</NavLink>

      <Routee />
    </>
  );
}

export default App;
