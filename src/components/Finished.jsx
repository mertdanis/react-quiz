import { useData } from "../contexts/MainContext";

function Finished() {
  const { userPoint, nickname, dispatch, totalPoints } = useData();

  return (
    <>
      <p className="text-4xl tracking-widest mb-6 text-center my-4">THE END!</p>
      <div className="flex flex-col gap-6  items-center  ">
        <div className="flex flex-col  bg-cyan-950 rounded-2xl p-6 ">
          <p>
            <span className="capitalize"> {nickname}</span> you scored{" "}
            <span className="font-bold">{userPoint}</span> out of {totalPoints}{" "}
            points
          </p>
        </div>
        <button
          className="p-4 bg-cyan-700 rounded-2xl transition-all hover:bg-cyan-950 hover:outline  "
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default Finished;
