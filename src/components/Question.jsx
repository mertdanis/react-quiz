import React from "react";

import { getData } from "../contexts/MainContext";

function Question() {
  const { initialState } = getData();

  return <div>{initialState.time}</div>;
}

export default Question;
