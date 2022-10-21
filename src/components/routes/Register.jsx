import { useContext } from "react";
import { userContext } from "../../context";

import useForm from "../../hooks/useForm";
import Input from "../Input";

function App() {
  const { Dispatch } = useContext(userContext);

  const { form, handleFormChange, submitForm, errors } = useForm({
    email: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      /.{1,}/,
    ],
    password: [/.{8,}/],
  });

  const handleLogin = (e) => {
    e.preventDefault();
    submitForm(() => Dispatch("SIGNUP", form));
  };

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-14 mb-20">
        <div>
          <h1 className="text-center text-6xl font-medium">
            Lite's Businesses
          </h1>
        </div>
        <form
          onChange={handleFormChange}
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >
          <Input
            label="Email"
            name="email"
            placeholder="Escriba su email"
            requirements={[
              "Este campo no puede estar vacío",
              "Debería tener formato de correo: correo@dominio.com",
            ]}
            validation={errors}
          />
          <Input
            label="Password"
            name="password"
            placeholder="Escriba su contraseña"
            type="password"
            requirements={["Este campo no puede estar vacío"]}
            validation={errors}
          />
          <button
            type="submit"
            className="bg-[#28231D] mx-auto text-white font-bold rounded-lg w-10/12 p-1.5"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
