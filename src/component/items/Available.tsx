import React from 'react';

import type { Iitem } from '../../types/itemtype';

const Available = ({ items }: { items: Iitem[] }) => {
    console.log(items);
    return (
        <div className= "grid grid-cols-3 gap-3 p-2 m-2 items-center">
            {items.map((item : Iitem) => {
                return <div className="card h-[250px] w-[250px] flex flex-col items-center  p-2 m-5 gap-4 rounded-xl outline outline-1 outline-gray-500" >
 

 <div className ="flex flex-row-reverse justify-between gap-10">
    <h3>{item.tag}</h3>
    <figure>
    <img 
      src={item.image}
      alt={item.name} className = "h-[30px] w-[30px]" />
  </figure>
  </div>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.description}</p>
    <div className="card-actions justify-end">
      <button className="btn h-[50px] w-[200px] bg-black text-white rounded-xl hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-amber-50">Add to stack</button>
    </div>
  </div>
</div>
            })}
        </div>
    );
};

export default Available;