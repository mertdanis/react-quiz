import "./index.css";
import Header from "./components/Header";
import Progress from "./components/Progress";
import Answers from "./components/Answers";
import Question from "./components/Question";
import Finished from "./components/Finished";
import Error from "./components/Error";

import { useData } from "./contexts/MainContext";

function App() {
  const { currentStatus } = useData();

  return (
    <div className="flex items-center justify-center  flex-col gap-6">
      <Header />

      {currentStatus === "error" && <Error />}

      {currentStatus === "active" && (
        <>
          <Progress />
          <Question />
          <Answers />
        </>
      )}
      {currentStatus === "finished" && <Finished />}
    </div>
  );
}

export default App;
