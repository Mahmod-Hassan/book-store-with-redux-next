import Image from "next/image";
import { FaEdit, FaStar, FaTrashAlt } from "react-icons/fa";
const Card = ({book = {}}) => {
    const {name, author, price,rating,image,featured, id} = book;
    return(
        <div className="flex shadow-md bg-white">

        <Image alt="" width={170} height={258} src={image} />

        <div className="flex-1 p-2 flex flex-col justify-center ">
            <div>
            <div className="flex justify-end gap-4">
              <FaEdit />
              <FaTrashAlt />
            </div>

          <div className="space-y-2 mt-4 h-full">
            <h4 className="font-semibold">{name}</h4>
            <p>{author}</p>
             <div className="flex">
                <FaStar className="text-orange-500" /> 
                <FaStar className="text-orange-500" /> 
                <FaStar className="text-orange-500" /> 
             </div>
            <p className="text-emerald-500 font-bold">BDT {price}</p>
          </div>
            </div>
        </div>
      </div>
    )
}
export default Card;