import React from "react";

import { getData } from "../contexts/MainContext";

function Header() {
  const { questionLength, dispatch, currentStatus } = getData();

  return (
    <div className="flex flex-col items-center justify-center mt-[5rem] gap-6">
      <div
        className="
      flex items-center justify-center gap-6 "
      >
        <img className="h-24" src="../public/imgs/logo.png" alt="Site Logo" />
        <h1 className="text-6xl font-bold text-white tracking-widest">
          The React Quiz
        </h1>
      </div>

      {currentStatus === "intro" && (
        <div className="flex flex-col items-center justify-center gap-[3rem] text-4xl text-white mt-[3rem]">
          <h2>Welcome to the React Quiz!</h2>
          <p> {questionLength} questions to test your React mastery</p>

          <div className="flex gap-6 ">
            <input
              className="rounded-2xl text-black"
              type="text"
              required
              onChange={(e) =>
                dispatch({
                  type: "nickname",
                  payload: e.target.value,
                })
              }
              placeholder="Set a nickname!"
            />

            <button
              onClick={() => {
                dispatch({
                  type: "startQuiz",
                });
              }}
              className="bg-slate-500 p-6 text-white rounded-2xl tracking-widest"
            >
              Let's start!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
