import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RateBarber from "./pages/RateBarber";
import Navbar from "./components/Navbar";
import HairCare from "./pages/HairCare";
import HairStyle from "./pages/HairStyles";
function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className=" m-auto ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/appointment"
              element={user ? <Appointments /> : <Login /> }
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/appointment" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/appointment" />}
            />
            <Route path="/ratebarber" element={<RateBarber />} />
            <Route path="/haircare" element={<HairCare />} />
            <Route path="/hairstyles" element={<HairStyle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
