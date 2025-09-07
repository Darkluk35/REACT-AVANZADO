import { useChat } from "../context/ChatContext";

export default function History() {
  const { state, dispatch } = useChat();

  return (
    <div className="bg-gray-800 p-4 w-64">
      <h2 className="text-lg font-bold mb-2">Historial</h2>
      <ul className="space-y-2">
        {state.mensajes.map((msg, i) => (
          <li key={i} className="text-sm text-gray-300 truncate">
            {msg.text}
          </li>
        ))}
      </ul>
      <button
        className="mt-4 w-full bg-red-600 hover:bg-red-700 p-2 rounded-lg"
        onClick={() => dispatch({ type: "CLEAR_HISTORY" })}
      >
        Borrar historial
      </button>
    </div>
  );
}
