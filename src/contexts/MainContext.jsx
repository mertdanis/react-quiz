import { useEffect, useReducer, useContext, createContext } from "react";

import axios from "axios";

const MainProvider = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  data: [],

  nickname: "",

  index: 0,
  userPoint: 0,

  loadingData: false,
  answer: null,
  result: null,
  time: null,

  // intro, active, error, finished ==> 4
  currentStatus: "intro",
};

function MainContext({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "isLoading/start":
        return {
          ...state,
          loadingData: true,
        };

      case "isLoading/finish":
        return {
          ...state,
          loadingData: false,
        };

      case "timeInterval":
        return {
          ...state,
          time: state.time !== 0 ? state.time - 1 : state.time,
          currentStatus: state.time === 0 ? "finished" : state.currentStatus,
        };

      case "nickname":
        return {
          ...state,
          nickname: action.payload,
        };

      case "questionData":
        return {
          ...state,
          data: action.payload,
        };

      case "error":
        return {
          ...state,
          errorMsg: action.payload,
          currentStatus: "error",
        };

      case "reset":
        return {
          ...initialState,
          data: state.data,
          currentStatus: "active",
        };

      case "startQuiz":
        return {
          ...state,
          currentStatus: state.currentStatus !== "error" ? "active" : "error",
          time: state.data.length * SECS_PER_QUESTION,
        };

      case "finishQuiz":
        return {
          ...state,
          currentStatus: "finished",
        };

      case "selected": {
        const question = state.data.at(state.index);
        return {
          ...state,
          answer: action.payload,
          userPoint:
            action.payload === question.correctOption
              ? state.userPoint + question.points
              : state.userPoint,
        };
      }

      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null,
        };

      default:
        return state;
    }
  };

  const [
    { data, currentStatus, index, userPoint, answer, nickname, time, errorMsg },
    dispatch,
  ] = useReducer(reducer, initialState);

  const totalPoints = data.reduce((total, item) => {
    return total + item.points;
  }, 0);

  useEffect(() => {
    const questionData = async () => {
      dispatch({
        type: "isLoading/start",
      });

      try {
        const response = await axios.get("http://localhost:9000/questions");

        dispatch({
          type: "questionData",
          payload: response.data,
        });
      } catch (error) {
        dispatch({
          type: "error",
          payload: error.message,
        });
      } finally {
        dispatch({
          type: "isLoading/finish",
        });
      }
    };
    questionData();
  }, []);

  const questionLength = data.length;

  return (
    <MainProvider.Provider
      value={{
        data,
        currentStatus,
        index,
        userPoint,
        questionLength,
        dispatch,
        answer,
        nickname,
        time,
        totalPoints,
        errorMsg,
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const useData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, useData };
