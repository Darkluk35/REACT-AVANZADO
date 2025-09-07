import { createContext, useState, useContext } from "react";

// 1. Crear el contexto
const ChatContext = createContext();

// 2. Crear el Provider
export function ChatProvider({ children }) {
  const [mensajes, setMensajes] = useState([]);

  // función para añadir mensajes
  const addMessage = (msg) => {
    setMensajes((prev) => [...prev, msg]);
  };

  // función para limpiar historial
  const clearHistory = () => setMensajes([]);

  return (
    <ChatContext.Provider value={{ mensajes, addMessage, clearHistory }}>
      {children}
    </ChatContext.Provider>
  );
}

// 3. Crear hook personalizado para consumir el contexto
export function useChat() {
  return useContext(ChatContext);
}
