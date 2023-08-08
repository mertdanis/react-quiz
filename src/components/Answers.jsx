import React from "react";
import { getData } from "../contexts/MainContext";
import Question from "./question";

function Answers() {
  const { data, index, dispatch, answer } = getData();

  const correctOption = data[index].correctOption;

  return (
    <div className="flex flex-col gap-6 w-4/12	">
      {data[index].options.map((option, index) => {
        return (
          <button
            disabled={answer !== null}
            onClick={() => {
              dispatch({
                type: "selected",
                payload: index,
              });
            }}
            className={`bg-slate-600 text-white p-6 w-full rounded-2xl hover:bg-orange-500 hover:cursor-pointer`}
          >
            {option}
          </button>
        );
      })}

      {answer !== null && (
        <button
          onClick={() => {
            dispatch({
              type: "nextQuestion",
            });
          }}
          className="ml-auto bg-slate-500 p-6 "
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Answers;
