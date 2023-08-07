import React, { useEffect, useReducer, useContext, createContext } from "react";

import axios from "axios";

const initialState = {
  questionNumber: 0,
  question: [],
  point: 0,
  time: 450,
};

const MainProvider = createContext();

function MainContext({ children }) {
  ///// fetch question data start

  useEffect(() => {
    const questionData = async () => {
      dispatch({
        type: "isLoading/start",
      });

      try {
        const response = await axios.get("http://localhost:9000/questions");

        response.data.map((val) => {
          dispatch({
            type: "questionData",
            payload: val.question,
          });
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

  ///// fetch question end

  ///// reducer function start

  const reducer = (state, action) => {
    switch (action.type) {
      case "isLoading/start":
        return console.log("yukleniyor");

      case "isLoading/finish":
        return console.log("yuklenme bitti");

      case "questionData":
        return {
          ...state,
          question: action.payload,
        };
    }

    return state;
  };

  ///// reducer function end

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainProvider.Provider value={{ initialState }}>
      {children}
    </MainProvider.Provider>
  );
}

const getData = () => {
  const context = useContext(MainProvider);
  return context;
};

export { MainContext, getData };
