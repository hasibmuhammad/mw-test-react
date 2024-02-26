import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className={`flex justify-center items-center gap-10`}>
        <NavLink className={({isActive}) => `btn hover:btn-primary active:btn-primary focus:btn-primary font-bold ${isActive ? "bg-primary text-white":""}`} to={"/problem1"}>Problem1</NavLink>
        <NavLink className={({isActive}) => `btn hover:btn-primary active:btn-primary focus:btn-primary font-bold ${isActive ? "bg-primary text-white":""}`} to={"/problem2"}>Problem2</NavLink>
    </div>
  )
}

export default Navbar