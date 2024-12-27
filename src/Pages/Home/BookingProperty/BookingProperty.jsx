import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const BookingProperty = ()=>{
    const propertyData = useLoaderData()
    const {name, price, image, location} = propertyData
    // console.log("Your property data is", propertyData)
    const {user} = useContext(AuthContext)
    // console.log("Your user is ", user)

    const handleProperty = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user?.displayName || "Anonymous";
        const email = user?.email || "No Email Provided";
        const price = form.price.value;
        const address = form.address.value;
        const date = form.date.value;
        const phone = form.phone.value;
    
        const bookingDetails = {
            image,
            name,
            email,
            price,
            address,
            date,
            phone,
            location,
        };
    
        // Check if all fields are filled
        if (!address || !date || !phone) {
            alert("Please fill out all required fields.");
            return;
        }
    
        // Send data to the backend
        fetch("https://real-state-project-server-omega.vercel.app/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookingDetails),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to book property");
                }
                return res.json();
            })
            .then((data) => {
                if (data.success) {
                    alert("Booking Successful");
                    form.reset();
                } else {
                    alert("Booking failed. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error booking property:", error);
                alert("Something went wrong. Please try again.");
            });
        
            
         
           
    };
    

    

    return(
        <div className="mt-20 py-20">
            <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto">
        <div className="text-center my-12">
            <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Booking Now</h4>
            <h2 className="text-[28px] text-black font-semibold">Choose Your Property</h2>
         </div>
                <div className="flex flex-col md:flex-col lg:flex-row gap-8">
                    <div>
                        <img src={image} alt={name}  
                        className="lg:w-[500px] md:w-full w-full   h-[380px] rounded-lg"/>
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
                                <div className="form-control col-span-1 lg:col-span-2 md:col-span-1">
                                    
                                    <input type="submit" value="Booking Now"
                                     className="btn btn-block bg-[#FF5A3A]  text-white font-bold"/>
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