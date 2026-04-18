import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          localStorage.setItem("token", true);
          localStorage.setItem("role", "admin");
          navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
