import { useState } from "react";
import "./index.css";

// component

import Header from "./components/header";
import Progress from "./components/Progress";
import Question from "./components/Question";
import Answers from "./components/Answers";

import { MainContext } from "./contexts/MainContext";

// component end

function App() {
  return (
    <div className="flex items-center justify-center flex-col gap-6">
      <MainContext>
        <Header />

        <Progress />
        <Question />
        <Answers />
      </MainContext>
    </div>
  );
}

export default App;
