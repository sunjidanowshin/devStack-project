
import React ,{type Dispatch, type SetStateAction} from 'react';

import type {Iitem} from '../../types/itemtype';
interface IYourStackProps {
    addedItems : Iitem[];
    setAddedItems : Dispatch<SetStateAction<Iitem[]>>
}
const YourStack = ({addedItems, setAddedItems}: IYourStackProps) => {

  const handelRemove = (itemToRemove: Iitem)=>{
    setAddedItems (addedItems.filter((i)=> i.name !== itemToRemove.name));
  }
    return (
        <div className = "rounded-b-lg w-[280px] border border-gray-800 flex flex-col justify-between items-center">
      <h2 className="text-xl font-bold mb-3">Your Stack</h2>
      {addedItems.length === 0 ? (
        <p className="text-gray-400 text-sm">No tech added yet</p>
      ) : (
        <div className="flex flex-col gap-2">
          {addedItems.map((item: Iitem, ind: number) => (
            <div key={ind} className="px-3 py-2 bg-gray-100 rounded-lg text-sm">
              {item.name}
              <button onClick={()=> handelRemove(item)} className="text-red-500 hover:text-red-700 text-xs font-medium"> Remove </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;