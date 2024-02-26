import {Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto my-10 px-10 lg:px-0 flex flex-col items-center justify-center">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main;