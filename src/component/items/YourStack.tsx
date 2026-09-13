import React, { type Dispatch, type SetStateAction } from 'react';
import type { Iitem } from '../../types/itemtype';

interface IYourStackProps {
  addedItems: Iitem[];
  setAddedItems: Dispatch<SetStateAction<Iitem[]>>;
}

const YourStack = ({ addedItems, setAddedItems }: IYourStackProps) => {

  const handelRemove = (itemToRemove: Iitem) => {
    setAddedItems(addedItems.filter((i) => i.name !== itemToRemove.name));
  };

  const handleRemoveAll = () => {
    setAddedItems([]);
  };

  return (
     <div className="w-[280px] bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
<h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
 <p className="text-sm text-gray-400 mb-4">
        {addedItems.length} Technology Selected
      </p>
{addedItems.length === 0 ? (
  <p className="text-gray-400 text-sm text-center py-8">No tech added yet</p>) : (
     <>
     <div className="flex flex-col gap-2 mb-4">{addedItems.map((item: Iitem, ind: number) => (<div key={ind}
                className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-2">
 <img src={item.image} alt={item.name} className="h-5 w-5 object-contain" />   <span className="text-sm font-medium text-gray-800">{item.name}</span>
                </div>
                <button
                  onClick={() => handelRemove(item)}
                  className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

        
          <button
            onClick={handleRemoveAll}
            className="w-full h-[42px] border border-red-300
             text-red-500 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;