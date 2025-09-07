import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const [mensajes, setMensajes] = useState([]);

  // Inicializamos el formulario con useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Función que se ejecuta al enviar el formulario
  const enviarMensaje = (data) => {
    if (!data.mensaje.trim()) return;

    const nuevoMensaje = {
      text: data.mensaje,
      sender: "user",
    };

    setMensajes((prev) => [...prev, nuevoMensaje]);

    console.log("Enviando Mensaje:", data.mensaje);

    // limpiamos el input después de enviar
    reset();
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full bg-gray-900 text-white justify-end">
        {/* Sección donde se renderizan los mensajes */}
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

        {/* Formulario con react-hook-form */}
        <form
          onSubmit={handleSubmit(enviarMensaje)}
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

        {/* Mostrar error si el campo está vacío */}
        {errors.mensaje && (
          <p className="text-red-400 text-sm px-4 pb-2">
            El mensaje no puede estar vacío
          </p>
        )}
      </div>
    </>
  );
}

export default App;
