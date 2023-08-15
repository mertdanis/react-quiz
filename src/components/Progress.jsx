import { useData } from "../contexts/MainContext";

function Progress() {
  const { index, userPoint, nickname, questionLength } = useData();

  return (
    <div className="flex flex-col gap-4   w-full sm:px-0 px-6 sm:w-4/12 mt-2 ">
      <input
        className="w-full  read-only cursor-default   rounded-lg appearance-none  dark:bg-cyan-700"
        disabled
        type="range"
        min={0}
        max={questionLength}
        value={index + 1}
      />

      <div className=" my-4 flex justify-between items-center">
        <div className="">
          <p>Question {index + 1} / 15</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="">
            <span className="capitalize">{nickname} </span>
            <span>you have:</span>
          </div>
          <p>{userPoint} / 280 points</p>
        </div>
      </div>
    </div>
  );
}

export default Progress;
