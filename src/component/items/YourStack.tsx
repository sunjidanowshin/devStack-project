import React from 'react';
import type {Iitem} from '../../types/itemtype';
interface IYourStackProps {
    addedItems : Iitem[];
}
const YourStack = ({addedItems}: IYourStackProps) => {
    return (
        <div>
      <h2 className="text-xl font-bold mb-3">Your Stack</h2>
      {addedItems.length === 0 ? (
        <p className="text-gray-400 text-sm">No tech added yet</p>
      ) : (
        <div className="flex flex-col gap-2">
          {addedItems.map((item: Iitem, ind: number) => (
            <div key={ind} className="px-3 py-2 bg-gray-100 rounded-lg text-sm">
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;