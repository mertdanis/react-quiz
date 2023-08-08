import React, { useEffect, useReducer, useContext, createContext } from "react";

import axios from "axios";

const MainProvider = createContext();

const initialState = {
  data: [],

  nickname: "",

  index: 0,
  userPoint: 0,

  loadingData: false,
  answer: null,
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
          currentStatus: error,
        };

      case "startQuiz":
        return {
          ...state,
          currentStatus: "active",
        };

      case "finishQuiz":
        return {
          ...state,
          currentStatus: "finished",
        };

      case "selected":
        const question = state.data.at(state.index);
        return {
          ...state,
          answer: action.payload,
          userPoint:
            action.payload === question.correctOption
              ? state.userPoint + question.points
              : state.userPoint,
        };

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
    { data, currentStatus, index, userPoint, answer, nickname },
    dispatch,
  ] = useReducer(reducer, initialState);

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
        console.log(error);
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
      }}
    >
      {children}
    </MainProvider.Provider>
  );
}

const getData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, getData };
