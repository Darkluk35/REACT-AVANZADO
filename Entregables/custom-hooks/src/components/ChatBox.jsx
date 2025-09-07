import { useState, useContext, useEffect } from "react";
import useOllamaHook from "../hooks/useOllamaHook";
import ChatContext from "../context/ChatContext";

export default function ChatBox() {
  const [input, setInput] = useState("");
  const { handleSubmit, response, error, loading } = useOllamaHook();
  const { addMessage } = useContext(ChatContext);

  const sendPrompt = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Mensaje del usuario
    addMessage({ sender: "user", text: input });

    // Llamada al modelo
    handleSubmit(input);
    setInput("");
  };

  // Escucha la respuesta de IA
  useEffect(() => {
    if (response) {
      addMessage({ sender: "ai", text: response });
    }
  }, [response]);

  return (
    <form onSubmit={sendPrompt} className="flex gap-2 p-4 border-t">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu mensaje..."
        className="flex-1 border rounded px-2 py-1"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 rounded"
      >
        {loading ? "..." : "Enviar"}
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}
