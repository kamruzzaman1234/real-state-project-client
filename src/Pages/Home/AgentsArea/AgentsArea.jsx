import { IoCallOutline } from "react-icons/io5";
const AgentsArea = ()=>{
    return(
<div className="py-20">
    <div className="text-center">
        <h4 className="text-[18px] text-[#FF5A3C] font-semibold">Expertise is Here</h4>
        <h2 className="text-[28px] text-black font-semibold">Our Exclusive Agents</h2>
     </div>
     <div className="mt-16">
        <div className="flex flex-col  lg:flex-row justify-between mb-6">
            <div className="flex gap-6 items-center">
                <div>
                    <img src="https://i.ibb.co.com/84RKmKg/Ellipse-81-4.png" 
                    className="w-[158px] h-[158px]" alt="" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-[22px] font-bold">Jenny White</h3>
                    <span className="text-[18px] font-medium">Sunshine</span>
                    <p className="flex items-center gap-3 border-2 border-[#FF5A3A] px-3 py-1 rounded-lg"><IoCallOutline 
                    className="w-[17px] h-[22px] text-[#FF5A3A]"></IoCallOutline>
                     <span className="text-[18px] font-medium ">Call: 9635872558</span> </p>
                </div>
                
            </div>

            <div className="flex gap-6 items-center">
                <div>
                    <img src="https://i.ibb.co.com/Cs139wv/Ellipse-81-1.png" 
                    className="w-[158px] h-[158px]" alt="" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-[22px] font-bold">Jenny White</h3>
                    <span className="text-[18px] font-medium">Sunshine</span>
                    <p className="flex items-center gap-3 border-2 border-[#FF5A3A] px-3 py-1 rounded-lg"><IoCallOutline 
                    className="w-[17px] h-[22px] text-[#FF5A3A]"></IoCallOutline>
                     <span className="text-[18px] font-medium ">Call: 9635872558</span> </p>
                </div>
                
            </div>

            

            
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row justify-between  mb-6">
            <div className="flex gap-6 items-center">
                <div>
                    <img src="https://i.ibb.co.com/NNNGPbz/Ellipse-81-3.png" 
                    className="w-[158px] h-[158px]" alt="" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-[22px] font-bold">Jenny White</h3>
                    <span className="text-[18px] font-medium">Sunshine</span>
                    <p className="flex items-center gap-3 border-2 border-[#FF5A3A] px-3 py-1 rounded-lg"><IoCallOutline 
                    className="w-[17px] h-[22px] text-[#FF5A3A]"></IoCallOutline>
                     <span className="text-[18px] font-medium ">Call: 9635872558</span> </p>
                </div>
                
            </div>

            <div className="flex gap-6 items-center">
                <div>
                    <img src="https://i.ibb.co.com/Kyjy2h4/Ellipse-81-2.png" 
                    className="w-[158px] h-[158px]" alt="" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-[22px] font-bold">Jenny White</h3>
                    <span className="text-[18px] font-medium">Sunshine</span>
                    <p className="flex items-center gap-3 border-2 border-[#FF5A3A] px-3 py-1 rounded-lg"><IoCallOutline 
                    className="w-[17px] h-[22px] text-[#FF5A3A]"></IoCallOutline>
                     <span className="text-[18px] font-medium ">Call: 9635872558</span> </p>
                </div>
                
            </div>

            

            
        </div>
     </div>
</div>
    )
}
export default AgentsArea;