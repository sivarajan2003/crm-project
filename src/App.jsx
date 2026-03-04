import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Reports from "./pages/Reports";
import Customer from "./pages/Customer";
import Opportunities from "./pages/sales/Opportunities";
import Activities from "./pages/sales/Activities";
import Deals from "./pages/Deals";
import Settings from "./pages/Settings";

function App() {

  const isAuth = localStorage.getItem("auth") === "true";

  return (
    <Router>
      <Routes>

        {/* LOGIN PAGE */}
        <Route
          path="/"
          element={isAuth ? <Navigate to="/dashboard" /> : <Login />}
        />

        {/* CRM LAYOUT */}
        <Route
          path="/"
          element={isAuth ? <MainLayout /> : <Navigate to="/" />}
        >

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          <Route path="customer" element={<Customer />} />
          <Route path="reports" element={<Reports />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="activities" element={<Activities />} />
          <Route path="deals" element={<Deals />} />
          <Route path="settings" element={<Settings />} />

        </Route>

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;