import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Routee from "./Routee";

import "./App.css";

function App() {
  return (
    <>
      <NavLink to={`/child1`}>child1</NavLink>
      <NavLink to={`/`}>child</NavLink>
      <Link to={"/child2"}>child2</Link>

      <Routee />
    </>
  );
}

export default App;
