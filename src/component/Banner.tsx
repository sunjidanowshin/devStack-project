
import BannerStack from "../assets/banner-stack.png";
const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-4 m-2">
        <div className="flex flex-col gap-5 items-center justify-center p-4 m-2">
            <div><h1 className ="text-4xl font-bold">Build Your Ideal</h1> <br/>
            <h1 className = "text-4xl font-bold bg-gradient-to-r from-red-500 to-indigo-600 bg-clip-text text-transparent " > Development Stack</h1> 
            <h3 className ="text-gray-600 my-5 ">Explore frontend, backend, database and tooling options, <br/> 
            compare them side by side, ans put together the stack that fits your <br/>next project.</h3></div>
 
    
   <div><ul className="flex space-x-10"> 
    <button className=" outline outline-1 outline-gray-400 bg-white-200  text-gray-600 rounded-xl hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-amber-50 h-[50px] w-[200px]"><a>Explore Techonologies</a></button>
  
    <button className="outline outline-1 outline-gray-400 bg-white-200  text-gray-600  rounded-xl hover:bg-gradient-to-r from-red-500 to-purple-500  hover:text-amber-50 h-[50px] w-[200px] "><a>Learn More</a></button>
  </ul>
  </div>
</div>
<div><img src={BannerStack} alt="Banner Stack" className="h-100 w-100" /> </div>
        </div>
    );
}; 

export default Banner;