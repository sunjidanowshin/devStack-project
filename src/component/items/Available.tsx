import { type Dispatch, type SetStateAction } from 'react';
import Cards from './Cards';
import type { Iitem } from '../../types/itemtype';

interface IAvailableProps {
    items: Iitem[];
    addedItems : Iitem[]
    setAddedItems : Dispatch<SetStateAction<Iitem[]>>;
}


const Available = ({ items, addedItems, setAddedItems }: IAvailableProps) => {
    console.log(items);
    return (
    

             <div className= "grid grid-cols-3 gap-3 p-2 m-2 items-center">
            {items.map((item : Iitem, ind:number) => {
                return (<Cards key ={ind}
                 item={item} 
                 addedItems = {addedItems}
                setAddedItems ={setAddedItems} />  
            ); 
            })}
        </div>
    
    );
};

export default Available;