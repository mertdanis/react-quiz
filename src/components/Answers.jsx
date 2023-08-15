import { useData } from "../contexts/MainContext";

import { memo } from "react";

import Timer from "./Timer";

const Answers = memo(function Answers() {
  const { data, index, dispatch, answer } = useData();

  const correctOption = data[index].correctOption;

  const hasAnswered = answer !== null;

  const lastQuestion = index === data.length - 1;

  return (
    <div className="flex flex-col gap-6 sm:w-4/12 w-10/12">
      {data[index].options.map((option, index) => {
        return (
          <button
            disabled={hasAnswered}
            key={index}
            onClick={() => {
              dispatch({
                type: "selected",
                payload: index,
              });
            }}
            className={`  tracking-widest sm:text-2xl text-xl  transition p-6 w-full rounded-2xl  hover:cursor-pointer hover:bg-cyan-700  hover:outline   
            ${index === answer ? "sm:ml-6 ml-4" : ""} ${
              hasAnswered
                ? index === correctOption
                  ? "bg-green-700"
                  : "bg-red-700"
                : "bg-cyan-950		"
            }`}
          >
            {option}
          </button>
        );
      })}
      <div className="flex justify-between sm:mb-0 mb-6">
        <Timer />

        {answer !== null && (
          <button
            onClick={() => {
              {
                lastQuestion
                  ? dispatch({ type: "finishQuiz" })
                  : dispatch({
                      type: "nextQuestion",
                    });
              }
            }}
            className="ml-auto bg-cyan-950  sm:w-2/12 w-4/12  rounded-2xl cursor-pointer hover:bg-cyan-700 transition  "
          >
            {lastQuestion ? "Finish" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
});

export default Answers;
