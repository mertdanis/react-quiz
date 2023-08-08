import { useState, useContext } from "react";
import "./index.css";

import Header from "./components/header";
import Progress from "./components/Progress";
import Answers from "./components/Answers";
import Question from "./components/question";

import { getData, MainContext } from "./contexts/MainContext";

function App() {
  const { currentStatus } = getData();

  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <Header />
      {currentStatus === "active" && (
        <>
          <Progress />
          <Question />
          <Answers />
        </>
      )}
    </div>
  );
}

export default App;
