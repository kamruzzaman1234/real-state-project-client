import Navbar from "../../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Banner = ()=>{
    return(
       <>

         <div
        className="h-[680px] w-full pt-52 bg-cover bg-center py-64 md:py-52 lg:py-0"
        style={{ backgroundImage: `url('https://i.ibb.co.com/bbbsTtF/pexels-sibi-mathew-410029-1092063.jpg')` }}
      >
        <div className="flex flex-col  items-center justify-center h-full">
         <div className="text-white text-center hidden md:block lg:block">
         <h1 className="text-[45px] md:text-[50px] lg:text-[55px]  font-bold">Find Your Dream House</h1>
         <p className="text-[20px] lg:text-[25px] font-medium">From as low as $10 per day with limited time offer discounts.</p>
         </div>
         <div className="flex flex-col md:flex-row lg:flex-row gap-4 my-6 pt-24 lg:pt-0">
            {/* <Link className="px-8 text-[15px] rounded-lg font-medium py-3 hover:text-white bg-white hover:bg-[#FF5A3C]">Buy</Link>
            <Link className="px-8 text-[15px] rounded-lg font-medium py-3 hover:text-white bg-white hover:bg-[#FF5A3C]">Rent</Link>
            <Link className="px-8 text-[15px] rounded-lg font-medium py-3 hover:text-white bg-white hover:bg-[#FF5A3C]">Cell</Link> */}

         </div>
         <div className="border-2 border-white p-2 rounded-lg my-6 bg-white">
            <form action="">
               <div className="flex flex-col lg:flex-row gap-3">
                  <div className="form-control">
                  <input type="password" name="password"
                  className="input input-bordered" placeholder="Enter Password"/>
                  </div>
                  <div className="form-control">
               <select className="select select-bordered join-item">
                  <option disabled selected>Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="condo">Condo</option>
                  <option value="house">House</option>
                  <option value="office">Office</option>
                 
               </select>
                  </div>
                  <div className="form-control">
                  <select className="select select-bordered join-item">
                  <option disabled selected>Location</option>
                  <option value="city-center">City Center</option>
                  <option value="suburb">Suburb</option>
                  <option value="countrysides">Country Sides</option>
                  <option value="coastal">Coastal</option>
                  <option value="mountains">Mountains</option>
                 
               </select>
                  </div>
                  <div className="form-control">
                  <select className="select select-bordered join-item">
                  <option disabled selected>Price</option>
                  <option value="">--Select Price Range--</option>
                  <option value="below-100k">Below $100,000</option>
                  <option value="100k-300k">$100,000 - $300,000</option>
                  <option value="300k-500k">$300,000 - $500,000</option>
                <option value="above-500k">Above $500,000</option>
                 
               </select>
                  </div>
                  <div className="form-control">
                     <input type="submit" value="Search" className="text-white px-6 py-2 bg-[#FF5A3C] rounded-lg input input-bordered"/>
                  </div>
               </div>
            </form>
       </div>
        </div>
      </div>
       </>
    )
}
export default Banner;