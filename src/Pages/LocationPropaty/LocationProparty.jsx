const LocationProparty = ()=>{
    return(
        <div className="my-20">
     <div className="text-center">
        <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Locations</h4>
        <h2 className="text-[28px] text-black font-semibold">Find Property By City</h2>
      </div>
      <div className="mt-16 grid grid-cols-1 md:gird-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
            <div>
                <img src="https://i.ibb.co.com/BzcL1nJ/Frame-7167-1.png" 
                alt="" className="w-full h-[293px]"/>
            </div>
            <div className="font-bold text-white absolute bottom-0 w-full
             opacity-0 hover:opacity-100 hover:bg-[rgb(255,90,58)] text-center p-3">
                <h2>Mumbai</h2>
            </div>
        </div>
        <div className="relative col-span-1 md:col-span-1 lg:col-span-2">
            <div>
                <img src="https://i.ibb.co.com/ZdJmszK/Frame-7165-1.png" 
                alt="" className="w-full h-[293px]"/>
            </div>
            <div className="font-bold text-white absolute bottom-0 w-full
             opacity-0 hover:opacity-100 hover:bg-[rgb(255,90,58)] text-center p-3">
                <h2>Delhi</h2>
            </div>
        </div>

        <div className="relative">
            <div>
                <img src="https://i.ibb.co.com/vHBBdMj/Frame-7168-1.png" 
                alt="" className="w-full h-[293px]"/>
            </div>
            <div className="font-bold text-white absolute bottom-0 w-full
             opacity-0 hover:opacity-100 hover:bg-[rgb(255,90,58)] text-center p-3">
                <h2>Mumbai</h2>
            </div>
        </div>

        <div className="relative">
            <div>
                <img src="https://i.ibb.co.com/S7bJ41k/Frame-7166-1.png" 
                alt="" className="w-full h-[293px]"/>
            </div>
            <div className="font-bold text-white absolute bottom-0 w-full
             opacity-0 hover:opacity-100 hover:bg-[rgb(255,90,58)] text-center p-3">
                <h2>Mumbai</h2>
            </div>
        </div>

        <div className="relative">
            <div>
                <img src="https://i.ibb.co.com/g6Z7PVF/pexels-binyaminmellish-186077.jpg" 
                alt="" className="w-full h-[293px]"/>
            </div>
            <div className="font-bold text-white absolute bottom-0 w-full
             opacity-0 hover:opacity-100 hover:bg-[rgb(255,90,58)] text-center p-3">
                <h2>Gujrat</h2>
            </div>
        </div>
      </div>
        </div>
    )
}
export default LocationProparty;