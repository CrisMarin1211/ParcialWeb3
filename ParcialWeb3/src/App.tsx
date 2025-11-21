import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/admin";
import Login from "./pages/login";
import StorePage from "./pages/store";
import ProtectedRoute from "./components/ProtectdRoute";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Router>
        <Routes > <Route path="/store" element={<StorePage />} /></Routes>
        <Routes>
          {/* <Route
            path="/"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          ></Route> */}
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;