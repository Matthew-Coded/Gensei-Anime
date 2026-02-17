import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GenreDetails from "./pages/GenreDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/genres/:slug" element={<GenreDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
