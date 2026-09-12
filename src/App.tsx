import Banner from "./component/Banner";  
import Nav from "./component/Nav";
import Items from "./component/items/items";  
import { Suspense } from "react";
import type { Iitem } from "./types/itemtype";



const itemsFetch = async (): Promise<Iitem[]> =>{
const res= await fetch('./data.json');
const data = await res.json();
return data;

}
function App() {

const itemsPromise = itemsFetch();
  return (
    <>
   
    <Nav/>
    <Banner/>
    <Suspense fallback={"Loading..."}>
      <Items itemsPromise={itemsPromise} />
    </Suspense>
    </>
  )
}

export default App
