const BackgroundImg  =()=>{
    return(
        <div className="">
            <div style={{backgroundImage: 
                `url('https://i.ibb.co.com/GQ30t2Q/pexels-falling4utah-2724749.jpg')`,
                 backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'600px'}}>
                <div className="py-[200px]">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white px-8 w-[391px]  space-y-4 flex py-16 flex-col">
                            <h3 className="font-semibold text-[18px]">Let’s Take A Tour</h3>
                            <h1 className="font-semibold text-[28px]">Search Property Smarter,
                            Quicker & Anywhere</h1>
                            <div className="flex items-center gap-6 ">
                                <img src="https://i.ibb.co.com/55FrYFb/Vector-2.png" className="w-[42px] h-[35px]" alt="" />
                                <h4 className="text-[18px] font-semibold">Play Video</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackgroundImg;