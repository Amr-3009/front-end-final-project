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
import AdminPanel from "./Routes/AdminPanel";
import ViewMenu from "./Routes/ViewMenu";
import EditMenu from "./Routes/EditMenu";
import ViewUsers from "./Routes/ViewUsers";
import UserProfile from "./Routes/UserProfile";
import Logout from "./Routes/Logout";
import AdminLogin from "./Routes/AdminLogin";
import ViewBookings from "./Routes/ViewBookings";
import MyBookings from "./Routes/MyBookings";
import AdminRegister from "./Routes/AdminRegister";
import Error from "./Routes/Error";
import LoginPlease from "./Routes/LoginPlease";
import NotFound from "./Routes/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/*Normal Routes*/}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        {/*Signing & log out handling Routes */}
        <Route path="/user-register" element={<Register />} />
        <Route path="/admin-panel/admin-register" element={<AdminRegister />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/logout" element={<Logout />} />
        {/*Admin Panel Routes*/}
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-panel/view-menu-items" element={<ViewMenu />} />
        <Route path="/admin-panel/edit-menu-item/:id" element={<EditMenu />} />
        <Route path="/admin-panel/view-bookings" element={<ViewBookings />} />
        <Route path="/admin-panel/view-users" element={<ViewUsers />} />
        {/*User Routes*/}
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        {/*Error Routes*/}
        <Route path="/error" element={<Error />} />
        <Route path="/login-please" element={<LoginPlease />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
