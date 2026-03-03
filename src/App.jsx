import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// Example Pages (create these inside src/pages)
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
// import Billing from "./pages/Billing";
import Reports from "./pages/Reports";
import Customer from "./pages/Customer";
//sales
import Opportunities from "./pages/sales/Opportunities";
//activity
import Activities from "./pages/sales/Activities";
import Settings from "./pages/Settings";
function App() {
  return (
    <Router>
      <Routes>

        {/* Layout Route */}
        <Route path="/" element={<MainLayout />}>

          {/* Default Page */}
          <Route index element={<Dashboard />} />

          {/* Other Pages */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<Product />} />
          {/* <Route path="billing" element={<Billing />} /> */}
          <Route path="customer" element={<Customer />} />
          <Route path="reports" element={<Reports />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* Redirect Unknown Routes */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>
  );
}

export default App;