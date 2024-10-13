import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const BookingProperty = ()=>{
    const propertyData = useLoaderData()
    const {title, price, image, _id} = propertyData
    const {user} = useContext(AuthContext)

    const handleProperty = (e)=>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const email = user?.email
        const price = form.price.value
        const address = form.address.value 
        const date = form.date.value 
        const phone = form.phone.value 
        const allValue = {
           _id, image, name, email, price, address, date, phone
        }
        
        console.log(allValue)
        
    fetch('http://localhost:6010/bookings', {
        method: "POST",
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(allValue)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            alert("Booking Successfully")
        }
    })
   
      
    }

    return(
        <div className="mt-20 py-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-col lg:flex-row gap-8">
                    <div>
                        <img src={image} alt={title}  
                        className="lg:w-[480px] md:w-full w-full   h-[380px] rounded-lg"/>
                    </div>
                    <div className="w-full">
                        <form action="" onSubmit={handleProperty}>
                            <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-2">
                                <div className="form-control">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name"
                                     defaultValue={user?.displayName} 
                                     className="input input-bordered"
                                     placeholder="Enter Your Name"/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" 
                                      defaultValue={user?.email}
                                      className="input input-bordered"
                                      placeholder="Enter Your Email"/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="price">Price</label>
                                    <input type="number" name="price"
                                     defaultValue={price} className="input input-bordered"/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address"
                                     className="input input-bordered"
                                     placeholder="Enter Your Address"/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="date">Date</label>
                                    <input type="date" name="date"
                                     className="input input-bordered"
                                     placeholder="Enter Date 1-3"/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="phone">Phone </label>
                                    <input type="number" name="phone"
                                     className="input input-bordered"
                                     placeholder="Enter Your Phone Number"/>
                                </div>
                                <div className="form-control">
                                    <label htmlFor="order">Confirm Order</label>
                                    <input type="submit" 
                                     className="btn btn-block bg-[#FF5A3A] text-white font-bold"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookingProperty;