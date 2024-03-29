import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RateBarber from "./pages/RateBarber";
import Navbar from './components/Navbar'
function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className=" p-5 m-auto">
          <Routes>
            <Route
              path="/"
              element={user ? <Home/> : <Navigate to="/login"/>}
              />
            <Route
              path="/login"
              element={!user ? <Login/> : <Navigate to="/"/>}
              />
            <Route
              path="/signup"
              element={!user ? <Signup/> : <Navigate to="/"/>}
              />
            <Route
              path="/ratebarber"
              element={<RateBarber/> }
              />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
