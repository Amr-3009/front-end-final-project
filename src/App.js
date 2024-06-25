import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Menu from "./Routes/Menu";
import Booking from "./Routes/Booking";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import ViewMenuComp from "./Components/ViewMenuComp/ViewMenuComp";
import EditMenuComp from "./Components/EditMenuComp/EditMenuComp";
import ViewUsersComp from "./Components/ViewUsersComp/ViewUsersComp";
import UserProfile from "./Components/UserProfile/UserProfile";
import Logout from "./Routes/Logout";
import AdminLogin from "./Routes/AdminLogin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user-register" element={<Register />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel/view-menu-items" element={<ViewMenuComp />} />
        <Route
          path="/admin-panel/edit-menu-item/:id"
          element={<EditMenuComp />}
        />
        <Route path="/admin-panel/view-users" element={<ViewUsersComp />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
