import React, { createContext, useState, useReducer } from "react";
import { GlobalReducer } from "./globalReducer";

export const GlobalContext = createContext();

export const GlobalProvider = props => {
  const reducer = props.reducer || GlobalReducer;
  const [state, dispatch] = useReducer(reducer, props.tasks || []);

  return (
    <GlobalContext.Provider
      value={{
        state: state,
        dispatch: dispatch
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
