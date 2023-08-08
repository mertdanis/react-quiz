import React from "react";

import { getData } from "../contexts/MainContext";

function Question() {
  const { data, index } = getData();

  return (
    <div className=" text-white p-4 w-4/12 text-center rounded-2xl text-2xl ">
      <p>{data[index].question}</p>
    </div>
  );
}

export default Question;
