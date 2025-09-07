import { useForm } from "react-hook-form";
import './App.css'

function App() {
   const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
       <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-lg space-y-4 w-80">
        <input
          {...register("nombre", { required: "El nombre es obligatorio" })}
          placeholder="Nombre"
          className="w-full border p-2 rounded"
        />
        {errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>}

        <input
          {...register("email", {
            required: "El correo es obligatorio",
            pattern: { value: /^\S+@\S+$/i, message: "Correo inválido" }
          })}
          placeholder="Correo"
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-xl w-full hover:bg-blue-600">
          Enviar
        </button>
      </form>
    </div>
    </>
  )
}

export default App
