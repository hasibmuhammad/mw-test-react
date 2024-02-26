import {Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto my-10 px-10 lg:px-0">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main;