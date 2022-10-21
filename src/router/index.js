import { BrowserRouter, Routes, Route } from "react-router-dom";

import Protected from "./Protected";

import Home from "../components/routes/Home";
import Login from "../components/routes/Login";
import Register from "../components/routes/Register";

import Dashboard from "../components/routes/Dashboard";
import Enterprises from "../components/routes/Dashboard/Enterprises";
import Inventory from "../components/routes/Dashboard/Inventory";
import CreateEnterprise from "../components/routes/Dashboard/Enterprises/create";
import CreateProduct from "../components/routes/Dashboard/Inventory/create";
import EnterprisesList from "../components/routes/Dashboard/Enterprises/EntreprisesList";
import InventoryList from "../components/routes/Dashboard/Inventory/InventoryList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="login"
          element={
            <Protected denegateOnLogged route="/dashboard">
              <Login />
            </Protected>
          }
        />
        <Route
          path="register"
          element={
            <Protected denegateOnLogged route="/dashboard">
              <Register />
            </Protected>
          }
        />

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="enterprises" element={<Enterprises />}>
            <Route index element={<EnterprisesList />} />
            <Route path="create" element={<CreateEnterprise />} />
          </Route>
          <Route path="inventory/:id" element={<Inventory />}>
            <Route index element={<InventoryList />} />
            <Route path="create" element={<CreateProduct />} />
          </Route>
          <Route path="*" element={<h1>No existe</h1>} />
        </Route>

        <Route path="*" element={<h1>No existe</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
