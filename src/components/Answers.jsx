import { useData } from "../contexts/MainContext";

import Timer from "./Timer";

function Answers() {
  const { data, index, dispatch, answer } = useData();

  const correctOption = data[index].correctOption;

  const hasAnswered = answer !== null;

  return (
    <div className="flex flex-col gap-6 w-4/12">
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
            className={`  tracking-widest text-2xl  transition p-6 w-full rounded-2xl  hover:cursor-pointer hover:bg-cyan-700 hover:outline   
            ${index === answer ? "ml-6" : ""} ${
              hasAnswered
                ? index === correctOption
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-cyan-950		"
            }`}
          >
            {option}
          </button>
        );
      })}
      <div className="flex justify-between">
        <Timer />

        {answer !== null && (
          <button
            onClick={() => {
              dispatch({
                type: "nextQuestion",
              });
            }}
            className="ml-auto bg-cyan-950 p-4 w-2/12  rounded-2xl cursor-pointer hover:bg-cyan-700 transition  "
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Answers;
