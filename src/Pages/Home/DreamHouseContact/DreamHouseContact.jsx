import { Link } from "react-router-dom";

const DreamHouseContact = ()=>{
    return(
        <div className="h-[600px]" style={{backgroundImage:
        `url('https://i.ibb.co.com/ZYhnwTs/pexels-divinetechygirl-1181719.jpg')`, backgroundSize:'cover', backgroundRepeat:'no-repeat', }}>
        <div className="text-center py-20 space-y-8">
      
        <h2 className="text-[28px] text-black font-semibold">Find Your Dream Home Today</h2>
        <div>
        <Link to="" className="bg-[#FF5A3A] text-white font-bold p-3  rounded-lg">Contact Us</Link>
        </div>
      </div>
        </div>
    )
}
export default DreamHouseContact;