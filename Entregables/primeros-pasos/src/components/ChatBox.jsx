import { useForm } from "react-hook-form";
import { useChat } from "../context/ChatContext";

export default function ChatBox() {
  const { register, handleSubmit, reset } = useForm();
  const { mensajes, addMessage } = useChat();

  const onSubmit = (data) => {
    if (!data.mensaje.trim()) return;

    // mensaje del usuario
    addMessage({ text: data.mensaje, sender: "user" });

    // simulación de respuesta de la IA
    setTimeout(() => {
      addMessage({ text: "Respuesta automática de la IA 🤖", sender: "bot" });
    }, 1000);

    reset();
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 overflow-y-auto p-4 space-y-2 flex flex-col">
        {mensajes.map((msg, index) => (
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
  );
}
