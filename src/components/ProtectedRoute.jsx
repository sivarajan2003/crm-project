import { Navigate } from "react-router-dom";
import { authService } from "../services";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = authService.isAuthenticated();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}