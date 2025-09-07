import { createContext, useReducer } from "react";

const ChatContext = createContext();

const initialState = { history: [] };

function chatReducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, history: [...state.history, action.payload] };
    default:
      return state;
  }
}

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  const addMessage = (message) => {
    dispatch({ type: "ADD_MESSAGE", payload: message });
  };

  return (
    <ChatContext.Provider value={{ history: state.history, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
}

export default ChatContext;
