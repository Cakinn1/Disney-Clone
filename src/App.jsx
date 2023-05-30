import Login from "./components/Login";
import logo from "./logo.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import { useState } from "react";
import Password from "./components/Password";

function App() {
  const [showSignOut, setShowSignOut] = useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} showSignOut={!showSignOut} />
        <Route path="/signup" element={<Signup />} showSignOut={showSignOut} />
        <Route path="/password" element={<Password />} showSignOut={showSignOut} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
