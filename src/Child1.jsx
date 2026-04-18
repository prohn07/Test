import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetuserQuery } from "../thunk";

function Child1() {
  let { data, error } = useGetuserQuery("/products");
  let data1 = useSelector((sourcedata) => sourcedata.user);
  let dispatch = useDispatch();

  useEffect(() => {
    console.log(data, error, isLoading);
  });

  return (
    <>
      <h2 style={{ color: "red" }}>child1</h2>
      <button
        onClick={() => {
          dispatch();
        }}
      >
        click
      </button>
    </>
  );
}

export default Child1;
