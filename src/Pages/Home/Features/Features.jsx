const Features = ()=>{
    return(
        <div className="py-20 bg-[#0B2C3D]">
    <div className="text-center ">
        <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Our Features</h4>
        <h2 className="text-[28px] text-white font-semibold">Why Choose Us ?</h2>
      </div>
      <div className="max-w-7xl mx-auto">
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-white py-10 px-6 flex rounded-md flex-col justify-center items-center">
                <div className="bg-red-200 p-5 rounded-full mb-6">
                <img src="https://i.ibb.co.com/KzhrtjQ/Group-7114.png" alt="" className=""/>
                </div>
                <div className="text-center">
                    <h3 className="text-[16px] mb-2 font-semibold">Trusted By Thousands</h3>
                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque </p>
                </div>
            </div>

            <div className="bg-white py-10 px-6 flex rounded-md flex-col justify-center items-center">
                <div className="bg-red-200 p-5 rounded-full mb-6">
                <img src="https://i.ibb.co.com/LdKxQQF/Vector-1.png" alt="" className=""/>
                </div>
                <div className="text-center">
                    <h3 className="text-[16px] mb-2 font-semibold">Wide Range Of Properties</h3>
                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque </p>
                </div>
            </div>

            <div className="bg-white py-10 px-6 flex rounded-md flex-col justify-center items-center">
                <div className="bg-red-200 p-5 rounded-full mb-6">
                <img src="https://i.ibb.co.com/k2Gdhcy/Group-7115.png" alt="" className=""/>
                </div>
                <div className="text-center">
                    <h3 className="text-[16px] mb-2 font-semibold">Finance Made Easy</h3>
                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque </p>
                </div>
            </div>

            <div className="bg-white py-10 px-6 flex rounded-md flex-col justify-center items-center">
                <div className="bg-red-200 p-5 rounded-full mb-6">
                <img src="https://i.ibb.co.com/zFSTvx7/Group-7116.png" alt="" className=""/>
                </div>
                <div className="text-center">
                    <h3 className="text-[16px] mb-2 font-semibold">Life Time Assistance</h3>
                    <p className="text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque </p>
                </div>
            </div>
      </div>
      </div>
 </div> 

    )
}
export default Features;