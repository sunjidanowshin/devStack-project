
import Logo from "../assets/logo-text.png"
const LastPart = () => {
    return (
        <div className ="flex flex-col justify-between">
            <div className= "flex flex-row justify-between p-5 m-5">
                <div className ="flex flex-col gap-2">   <img src={Logo} alt="Logo" className="h-10 w-45" />
                  <p>Curated toools, technologies, and resources for developers building <br/> modern software</p>

                    <ul className="flex flex-row space-x-4">
    <li><a href="#" className="text-gray-700 hover:text-pink-600">GitHub</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Twitter</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">LinkedIn</a></li>
   
  </ul>
                </div>
                  <ul className="flex flex-col space-x-4">
    <li><a href="#" className="text-black hover:text-pink-600">PRODUCT</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Home</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Projects</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Technologies</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Projects</a></li>
  </ul>
    <ul className="flex flex-col space-x-4">
    <li><a href="#" className="text-black  hover:text-pink-600">COMPANY</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">About</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">contact</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600"></a>Careers</li>
    
  </ul>
    <ul className="flex flex-col space-x-4">
    <li><a href="#" className="text-black  hover:text-pink-600"></a> LEGAL</li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Privacy Policy</a></li>
    <li><a href="#" className="text-gray-700 hover:text-pink-600">Terms of Service</a></li>
    
  </ul>
                
           </div>




            <div className ="flex flew-row justify-between border-t border-gray-300 p-10 m-10 text-gray-600 "> <p> 2026 Dev Stack. All rights reserved.</p> <p><span>Privacy </span>Terms</p></div>
        </div>
    );
};

export default LastPart;