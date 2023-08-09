import { useData } from "../contexts/MainContext";
import { useEffect } from "react";

function Timer() {
  const { time, dispatch } = useData();

  useEffect(() => {
    const timerInterval = setInterval(() => {
      dispatch({
        type: "timeInterval",
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [dispatch]);

  return (
    <p className="bg-cyan-950 p-4 bg-transparent outline rounded-xl  outline-cyan-950 text-white">
      {time}
    </p>
  );
}

export default Timer;
