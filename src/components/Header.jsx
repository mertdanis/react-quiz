import { useData } from "../contexts/MainContext";

function Header() {
  const { questionLength, dispatch, currentStatus, nickname } = useData();

  return (
    <div className="flex flex-col items-center justify-center mt-[5rem] ">
      <div
        className="
      flex items-center gap-6 "
      >
        <img className="h-24 " src="../public/imgs/logo.png" alt="Site Logo" />
        <h1 className="text-6xl text-cyan-400 font-bold  tracking-widest">
          The React Quiz
        </h1>
      </div>

      {currentStatus === "intro" && (
        <div className="flex flex-col items-center mt-[7rem] gap-[5rem] text-4xl   ">
          <h2>Welcome to the React Quiz!</h2>
          <p> {questionLength} questions to test your React mastery</p>

          <form className="flex gap-6 ">
            <input
              className="bg-transparent outline outline-cyan-950 rounded-2xl  p-6 outline-none capitalize"
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
              className="bg-cyan-700 p-6 transition rounded-2xl tracking-widest hover:bg-cyan-950 "
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
