import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const BookingRow = ({booking, handleDelete, handleConfirm})=>{
    const {user} = useContext(AuthContext)
    const {_id, image, title, date, price, location, status, email} = booking
    return(
        
            <tr className="bg-slate-200">
        <th>
        <button onClick={()=> handleDelete(_id)}
         className="btn btn-circle btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold"></div>
              
            </div>
          </div>
        </td>
        <td>
          {title}
          <br />

        </td>
        <td>{location}</td>
        <td>${price}</td>
       
        <th>{date}</th>
        <th>{user?.email}</th>
        <th>
         {
          status === "confirm" ? <button className="btn bg-orange-600
          font-bold text-white">Confirm</button> :  
          <button onClick={()=> handleConfirm(_id)} 
          className="btn btn-ghost btn-xs">Please Confirm</button>
         }
        </th>
      </tr>
        
    )
}
export default BookingRow;