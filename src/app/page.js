import AddNewBook from "@/components/AddNewBook";
import AllCard from "@/components/AllCard";
import store from "@/components/redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="grid grid-cols-3">

         <div className="col-span-2">

              <div className="flex justify-between items-center my-10">
                <h1 className="font-bold text-lg">Book List</h1>
                <div className="space-x-2">
                  <button type="button" className="bg-emerald-500 text-white py-1 px-5 border rounded-full">All</button>
                  <button className="py-1 px-5 border border-emerald-500 rounded-2xl">Featured</button>
                </div>
                </div> 

              <div>
                   <AllCard />
              </div>
         </div>

         <div>
              <AddNewBook />
         </div>
      </main>
      </Provider>
  )
}
