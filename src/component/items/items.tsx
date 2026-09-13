import  {use, useState } from 'react';
import type { Iitem } from '../../types/itemtype';
import Available from './Available';
import YourStack from './YourStack';
interface ItemsProps {
        itemsPromise: Promise<Iitem[]>}



const Items = ({itemsPromise}:ItemsProps) => {
    const items = use(itemsPromise)
    console.log(items)

{/*const[buttonType, setButtonType] = useState("available")*/}
const [addedItems, setAddedItems] = useState<Iitem[]>([])
    return(
       <div className="flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-center p-4 m-2 container mx-auto">
            <div className="w-full">

      <div><h1 className= "text-2xl md:text-3xl w-full font-bold">Explore the <span  className = "font-bold bg-gradient-to-r from-red-500 to-indigo-600 bg-clip-text text-transparent  ">Technologies</span> </h1>
      <h2 className="text-lg text-gray-600">Pick One technology per catagory to build yoru ideal stack.</h2>
      </div> 
        <div><Available items ={items} addedItems={addedItems} setAddedItems = {setAddedItems}/> </div>
</div>
       
      <div className="w-full lg:w-auto"><YourStack addedItems = {addedItems} setAddedItems = { setAddedItems}/> </div>  
        </div>)
    ;
};

export default Items;