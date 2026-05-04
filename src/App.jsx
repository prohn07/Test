import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Routee from "./Routee";

import "./App.css";

function App() {
  return (
    <>
      <NavLink to={`/child1`}>child1</NavLink>
      <NavLink to={`/`}>child</NavLink>
<<<<<<< HEAD
      <Link to={"/child2"}>child2</Link>
=======
      <link></link>
>>>>>>> 2345c56 (second)

      <Routee />
    </>
  );
}

export default App;
