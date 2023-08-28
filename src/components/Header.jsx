import { useData } from "../contexts/MainContext";

function Header() {
  const { questionLength, dispatch, currentStatus, nickname } = useData();

  return (
    <div className="flex  flex-col items-center justify-center sm:mt-[5rem] mt-6 ">
      <div
        className="
      flex flex-col sm:flex-row items-center gap-6 "
      >
        <img className="h-16 sm:h-24 " src="/public/logo.png" alt="Site Logo" />
        <h1 className="sm:text-6xl text-4xl text-cyan-400 font-bold  tracking-widest">
          The React Quiz
        </h1>
      </div>

      {currentStatus === "intro" && (
        <div className="flex flex-col items-center mt-[7rem] gap-[5rem]  text-4xl   ">
          <div className="flex flex-col sm:gap-[5rem] gap-6 items-center justify-center text-xl sm:text-4xl">
            <h2>Welcome to the React Quiz!</h2>
            <p> {questionLength} questions to test your React mastery</p>
          </div>

          <form className="flex flex-col  sm:flex-row gap-6 ">
            <input
              className="bg-transparent outline outline-cyan-950 rounded-2xl  p-6 outline-none capitalize transition  focus:outline-cyan-500 "
              type="text"
              required
              onChange={(e) =>
                dispatch({
                  type: "nickname",
                  payload: e.target.value,
                })
              }
              placeholder="Your nickname?"
            />

            <button
              onClick={() => {
                if (!nickname) return;
                dispatch({
                  type: "startQuiz",
                });
              }}
              className="bg-cyan-700 p-6 transition rounded-2xl tracking-widest hover:bg-cyan-950 hover:-translate-y-1 active:translate-y-1"
            >
              Lets start!
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Header;
