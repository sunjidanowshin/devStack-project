import React from 'react';
import Cards from './Cards';
import type { Iitem } from '../../types/itemtype';

const Available = ({ items }: { items: Iitem[] }) => {
    console.log(items);
    return (
        <div>
             <div className= "grid grid-cols-3 gap-3 p-2 m-2 items-center">
            {items.map((item : Iitem, ind:number) => {
                return <Cards key ={ind} item={item} />   
            })}
        </div>
        </div>
    );
};

export default Available;