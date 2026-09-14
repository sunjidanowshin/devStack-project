import Banner from "./component/Banner";  
import Nav from "./component/Nav";
import Items from "./component/items/items";  
import { Suspense } from "react";
import type { Iitem } from "./types/itemtype";
import LastPart from "./component/LastPart"

const itemsFetch = async (): Promise<Iitem[]> =>{
const res= await fetch('./data.json');
const data = await res.json();
return data;

}
function App() {
const itemsPromise = itemsFetch();
  return (
    <div className = "max-w-[1440px] mx-auto">
   
    <Nav/>
    <Banner/>
    <Suspense fallback={"Loading..."}>
      <Items itemsPromise={itemsPromise} />
    </Suspense>
  <LastPart/>
    </div>
  )
}

export default App
