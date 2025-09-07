import { createContext, useReducer, useContext } from "react";

const ChatContext = createContext();

const initialState = {
  mensajes: [],
};

function chatReducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, mensajes: [...state.mensajes, action.payload] };
    case "CLEAR_HISTORY":
      return { ...state, mensajes: [] };
    default:
      return state;
  }
}

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}
