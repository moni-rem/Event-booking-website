import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import EventDetail from "./pages/EventDetail";
// import MyBookings from "./pages/MyBookings";
// import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route
          path="*"
          element={
            <main className="px-6 py-16 text-center">
              <h1 className="text-3xl font-black text-slate-900">
                Page coming soon
              </h1>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
