import { useForm } from "react-hook-form";
import { ChatProvider, useChat } from "./context/ChatContext";
import useOllamaHook from "./hooks/useOllamaHook";
import History from "./components/History";
import "./App.css";

function ChatBox() {
  const { register, handleSubmit, reset } = useForm();
  const { state, dispatch } = useChat();
  const { enviarPrompt } = useOllamaHook();

  const onSubmit = async (data) => {
    if (!data.mensaje.trim()) return;

    // Agregar mensaje del usuario
    dispatch({
      type: "ADD_MESSAGE",
      payload: { text: data.mensaje, sender: "user" },
    });

    // Obtener respuesta de Ollama
    const respuestaIA = await enviarPrompt(data.mensaje);

    dispatch({
      type: "ADD_MESSAGE",
      payload: { text: respuestaIA, sender: "bot" },
    });

    reset();
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Panel lateral historial */}
      <History />

      {/* Chat principal */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
          {state.mensajes.map((msg, index) => (
            <div
              key={index}
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-600 self-end"
                  : "bg-gray-700 self-start"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 flex items-center bg-gray-800"
        >
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none"
            {...register("mensaje", { required: true })}
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ChatProvider>
      <ChatBox />
    </ChatProvider>
  );
}
