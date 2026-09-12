import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <div>
           <nav className="flex justify-between p-4 container mx-auto outline outline-1 outline-gray-300 sticky top-0 z-50">  
  <img src={Logo} alt="Logo" className="h-10" />
  <ul className="flex space-x-4">
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Home</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Technologies</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Projects</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">About</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Contact</a></li>
  </ul>
  <ul className="flex space-x-4"> 
    <button className="bg-white-500  text-gray-700 rounded-full hover:bg-pink-600 hover:text-amber-50 h-[35px] w-[100px] "><a>Sign In</a></button>
  
    <button className="bg-white-500 text-gray-700 rounded-full hover:bg-pink-600 hover:text-amber-50 h-[35px] w-[100px]  "><a>Sign Up</a></button>
  </ul>
</nav> 
        </div>
    );
};

export default Nav;