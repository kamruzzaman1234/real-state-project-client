import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../../../Provider/AuthProvider"
import BookingRow from "./BookingRow"
import axios from "axios"

const Bookings = ()=>{
    const [bookings, setBookings] = useState([])
    const {user} = useContext(AuthContext)
    const url = `http://localhost:6010/bookings?email=${user.email}`
    useEffect(()=>{


      axios.get(url, {withCredentials: true})
      .then(res => {
        console.log(res.data)
        setBookings(res.data)})
      .catch(error => console.error('Error fetching bookings:', error));

        // fetch(url)
        // .then(res=> res.json())
        // .then(data=>{
        //     setBookings(data)
        // })
    },[url])

    const handleDelete = (id)=>{
      const processed = confirm("Are You Sure you want to Delete")
     if(processed){
      fetch(`http://localhost:6010/bookings/${id}`, {
          method:"DELETE",
        
      })
      .then(res=> res.json())
      .then(data=>{
          console.log(data)
          if(data.deletedCount > 0){
              alert("Deleted SuccessFull")
              const reamining = bookings.filter(booking=> booking._id !== id)
              setBookings(reamining)
          }
          
      })
     }
  }

    const handleConfirm = (id)=>{
      fetch(`http://localhost:6010/bookings/${id}`,{
        method:"PATCH",
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify({status: "confirm"})
      })
      .then(res=> res.json())
      .then(data=> {
        console.log(data)
        if(data.modifiedCount > 0){
          const remining = bookings.filter(booking=> booking._id !== id)
          const updated = bookings.find(booking=> booking._id === id)
          updated.status = "confirm"
          const newBooking = [updated, ...remining]
          console.log(newBooking)
          setBookings(newBooking)
        }
      })
    }
    return(
        <div className="mt-20 py-20">
            <div className="max-w-7xl mx-auto">
            <div className="text-center my-12">
            <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Your Booking Property</h4>
            <h2 className="text-[28px] text-black font-semibold">Choose Your Property</h2>
         </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-slate-300 ">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Location</th>
        <th>Price</th>
        <th>Date</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=> <BookingRow key={booking._id}
        booking={booking} 
        handleDelete={handleDelete}
        handleConfirm={handleConfirm}></BookingRow>)
      }
      
    </tbody>
    {/* foot */}
    <tfoot>
      
    </tfoot>
  </table>
</div>
            </div>

            </div>
        </div>
    )
}
export default Bookings