import { useReducer, createContext } from "react";
import { node } from "prop-types";
import { theme, mediaQueries } from "theme";

const initialState = {
  theme,
  mediaQueries,
};

const GlobalContext = createContext({
  state: initialState,
  dispatch: () => null,
});

function globalReducer(state, action) {
  switch (action.type) {
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: node.isRequired,
};

export { GlobalContextProvider, GlobalContext };
