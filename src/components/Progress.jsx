import React from "react";
import { useContext } from "react";
import { MainContext, getData } from "../contexts/MainContext";

function Progress() {
  const { index, userPoint, nickname } = getData();

  return (
    <div className="flex flex-col gap-4  text-white p-6 w-4/12 mt-6 ">
      <p className="text-center">
        You are playing as <span className="uppercase">{nickname}</span>
      </p>
      <input type="range" min={0} max={15} value={index} />
      <div className=" gap-6  p-3 flex justify-between items-center">
        <div className="">
          <p>Question {index + 1}/15</p>
        </div>

        <p>{userPoint}/280 points</p>
      </div>
    </div>
  );
}

export default Progress;
