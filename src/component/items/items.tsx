import React, {use } from 'react';
import type { Iitem } from '../../types/itemtype';
import Available from './Available';
interface ItemsProps {
        itemsPromise: Promise<Iitem[]>}



const Items = ({itemsPromise}:ItemsProps) => {
    const items = use(itemsPromise)
    console.log(items)

{/*const[buttonType, setButtonType] = useState("available")*/}

    return(
        <div className="flex flex-row gap-5 items-center justify-center p-4 m-2 container mx-auto">
            <div>

      <div><h1 className= "text-3xl font-bold">Explore the <span  className = "font-bold bg-gradient-to-r from-red-500 to-indigo-600 bg-clip-text text-transparent  ">Technologies</span> </h1>
      <h2 className="text-lg text-gray-600">Pick One technology per catagory to build yoru ideal stack.</h2>
      </div> 
        <div><Available items ={items}/> </div>
</div>
       
      <div>Your Stack </div>  
        </div>)
    ;
};

export default Items;