import React from "react";
import { useContext } from "react";
import { MainContext, getData } from "../contexts/MainContext";

function Progress() {
  const { initialState } = getData();

  const { questionNumber, point } = initialState;

  return (
    <div className="flex flex-col gap-4">
      <input type="range" min={0} max={15} value={2} />
      <div className="bg-slate-500 gap-6  p-3 flex justify-between items-center">
        <div className="">
          <p>Question {questionNumber}/15</p>
        </div>
        <p>{point}/280 points</p>
      </div>
    </div>
  );
}

export default Progress;
