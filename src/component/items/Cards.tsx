
import { type Dispatch, type SetStateAction, useState} from 'react';
import type { Iitem } from '../../types/itemtype';


interface IAddedItemCardProps{
    item : Iitem;
    addedItems : Iitem[];
    setAddedItems : Dispatch<SetStateAction<Iitem[]>>;
}







const Cards = ({ item, addedItems, setAddedItems }: IAddedItemCardProps ) => {
const [showToast, setShowToast] = useState(false);
let isAdded = false;

for (let i = 0; i < addedItems.length; i++) {
  if (addedItems[i].name === item.name) {
    isAdded = true;
  }
}


    return (
       <div className="card flex flex-col p-5 gap-3 rounded-2xl border border-gray-200 shadow-sm bg-white w-full transition-all duration-300 hover:outline hover:outline-1 hover:outline-pink-600 hover:-translate-y-1">
        {showToast && (
  <div className="fixed top-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-5 sm:translate-x-0 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 max-w-[90%] sm:max-w-xs text-center">
     {item.name} added to stack!
  </div>
)}

  {/* Top row: icon + badge */}
  <div className="flex flex-row items-center justify-between">
    <figure>
      <img
        src={item.image}
        alt={item.name}
        className="h-8 w-8 object-contain"
      />
    </figure>
    <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600">
      {item.tag}
    </span>
  </div>


  <div className="card-body p-0 gap-2">
    <h2 className="card-title text-lg font-semibold text-gray-900">
      {item.name}
    </h2>
    <p className="text-sm text-gray-500 leading-snug">
      {item.description}
    </p>


    <div className="flex items-center gap-2 mt-1">
      <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
        {item.type}
      </span>
      <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
        {item.difficulty}
      </span>
      <span className="text-xs flex items-center gap-1 text-gray-600">
        ⭐ {item.rating}
      </span>
    </div>


    <div className="card-actions mt-3">
      <button 
        className={`btn w-full h-[45px] bg-black text-white rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-purple-500 hover:text-amber-50
            disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-none disabled:hover:from-transparent disabled:hover:to-transparent`}
        onClick={() =>
             {setAddedItems([...addedItems, item]);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 2000);
            }}
        disabled= {isAdded}
      >
        
       {isAdded ? 'Added' : 'Add to Stack'}
      </button>
    </div>
  </div>
</div>
    );
};

export default Cards;