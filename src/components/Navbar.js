import { HiSearch } from "react-icons/hi";
const Navbar = () => {
    return(
        <nav className="py-4 2xl:px-6">
        <div className="container flex items-center justify-between">
          {/* <img src="./images/logo.svg" width="150px" className="object-contain" /> */}
         <h1 className="font-bold text-2xl space-x-2"><span className="text-emerald-500 border-b-2 border-b-orange-500">Awesome</span> 
         <span className="text-orange-500 border-b-2 border-b-emerald-500">Books</span>
         </h1>
          <ul className="hidden md:flex items-center space-x-6">
            <li className="cursor-pointer">Book Store</li>
            <li className="cursor-pointer">Wishlist</li>
            <li className="cursor-pointer">My Collection</li>
          </ul>
    
          <form>
            <div className="flex shadow-md rounded-full pl-4 p-1 relative justify-between bg-white items-center">
               <HiSearch className="absolute right-2"/>
              <input className="outline-none" type="text" placeholder="Search" />
            </div>
          </form>
        </div>
      </nav>
    )
}
export default Navbar;