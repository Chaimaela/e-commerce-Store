import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
  {/* Gradient Background */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 w-screen h-screen">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[200vh] bg-[radial-gradient(ellipse_at_top,rgba(139,0,0,0.3)_0%,rgba(100,0,0,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
    </div>
  </div>

  {/* Main Content */}
  <div className="relative z-50 pt-20">
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </div>
</div>

  );
}

export default App;
