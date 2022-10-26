import { createContext, useReducer } from "react";

const initialState: any = {
  user: {
    id: 1,
    name: "",
    address: "",
  },
  settings: {},
};

export const StateContext = createContext(initialState);

const reducer = (state: any, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "updateUser":
      return { ...state, user: { ...state.user, ...action.payload } };
    default:
      throw new Error(
        `Uh Oh! We don't have the '${action.type}' action here yet. Help us out by writing it or check your spelling, silly head.`
      );
  }
};

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
