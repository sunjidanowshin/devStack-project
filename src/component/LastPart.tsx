
import Logo from "../assets/logo-text.png"
const LastPart = () => {
    return (
        <div className="flex flex-col gap-2 ">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-5 m-5 md:m-10">
                <div className ="flex flex-col gap-2">   <img src={Logo} alt="Logo" className="h-8 w-auto object-contain" />
                  <p>Curated toools, technologies, and resources for developers building <br/> modern software</p>

                    <ul className="flex flex-row space-x-4">
    <li><a href="#" className="text-gray-700 hover:text-pink-600">GitHub</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Twitter</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">LinkedIn</a></li>
   
  </ul>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row gap-8">
                  <ul className="flex flex-col space-x-4">
    <li><a href="#" className="text-black hover:text-pink-600">PRODUCT</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Home</a></li>
   
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Technologies</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Projects</a></li>
  </ul>
    <ul className="flex flex-col space-x-4">
    <li><a href="#" className="text-black  hover:text-pink-600">COMPANY</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">About</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">contact</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Careers</a></li>
    
  </ul>
    <ul className="flex flex-col space-x-4">
    <li><a href="#" className="text-black  hover:text-pink-600">LEGAL</a> </li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Privacy Policy</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Terms of Service</a></li>
    
  </ul>
     </div>           
           </div>

           <div className="flex flex-col md:flex-row justify-between items-center gap-2 border-t border-gray-300 p-6 md:p-10 text-gray-600 text-center"> <p> 2026 Dev Stack. All rights reserved.</p> <p><span className = "mr-4">Privacy Policy</span>Terms of Services</p></div>
        </div>
    );
};

export default LastPart;