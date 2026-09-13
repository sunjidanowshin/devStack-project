import Logo from "../assets/logo-text.png";
import { useState } from "react"; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <>
           <nav className= "flex justify-between items-center p-4 container mx-auto outline outline-1 outline-gray-300 sticky top-0 z-50 bg-white">  
  <img src={Logo} alt="Logo" className="h-10" />
  <ul className="hidden md:flex space-x-4">
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Home</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Technologies</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Projects</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">About</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Contact</a></li>
  </ul>
  <ul className="hidden md:flex space-x-4"> 
    <button className="bg-white-500  text-gray-700 rounded-full hover:bg-pink-600 hover:text-amber-50 h-[35px] w-[100px] "><a>Sign In</a></button>
  
    <button className="bg-white-500 text-gray-700 rounded-full hover:bg-pink-600 hover:text-amber-50 h-[35px] w-[100px]  "><a>Sign Up</a></button>
  </ul>
  <label className="btn btn-circle swap swap-rotate md:hidden">
    <input 
      type="checkbox" 
      checked={isOpen}
      onChange={() => setIsOpen(!isOpen)}
    />
    <svg
      className="swap-off fill-current"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512">
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>
    <svg
      className="swap-on fill-current"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512">
      <polygon
        points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    </svg>
  </label>
</nav> 
{isOpen && (
    <ul className="menu md:hidden bg-base-100 w-full p-4 shadow-md gap-2">
        <li><a href="#">Home</a></li>
        <li><a href="#">Technologies</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li className="mt-2">
            <button className="btn btn-outline btn-sm w-full">Sign In</button>
        </li>
        <li>
            <button className="btn btn-primary btn-sm w-full">Sign Up</button>
        </li>
    </ul>
)}
        </>
    );
};

export default Nav;