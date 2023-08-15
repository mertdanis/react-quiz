import { useData } from "../contexts/MainContext";
import { useEffect } from "react";

function Timer() {
  const { time, dispatch } = useData();

  const mins = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    const timerInterval = setInterval(() => {
      dispatch({
        type: "timeInterval",
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [dispatch]);

  return (
    <p className="bg-cyan-950  p-4 bg-transparent outline rounded-xl  outline-cyan-950 text-white">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </p>
  );
}

export default Timer;
