import {Link} from 'react-router-dom'
import { FaBuildingUser, FaInstagram } from "react-icons/fa6";
import { FaFacebookF,  FaLinkedinIn,FaTwitter } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
const Footer = ()=>{
    return(
        <div className="bg-[#0B2C3D]">
            <div className="py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-6">   
                        <div className="flex items-center gap-6">
                        <FaBuildingUser className="text-white text-[30px]"></FaBuildingUser>
                        <Link to="/" className=" text-white text-xl hidden lg:block">Easy Housing</Link>
                        </div>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                             tempor incididunt
                         ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                         <div className="flex text-white gap-4 items-center">
                            <div className="p-3 bg-slate-400">
                                <FaFacebookF></FaFacebookF>
                            </div>
                            <div className="p-3 bg-slate-400">
                                <FaInstagram></FaInstagram>
                            </div>
                            <div className="p-3 bg-slate-400">
                                <FaLinkedinIn></FaLinkedinIn>
                            </div>
                            <div className="p-3 bg-slate-400">
                                <FaTwitter></FaTwitter>
                            </div>
                         </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[18px] font-bold text-white">Quick Links</h3>
                        </div>
                        <div>
                            <ul className="text-white space-y-4" type="" style={{}}>
                                <li><Link to="" className="text-[15px]">About Us</Link></li>
                                <li><Link to="" className="text-[15px]">Blog & Article</Link></li>
                                <li><Link to="" className="text-[15px]">Terms & Condition</Link></li>
                                <li><Link to="" className="text-[15px]">Privacy Policy</Link></li>
                                <li><Link to="">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[18px] font-bold text-white">News Letter</h3>
                        </div>
                        <div>
                            <form action="" className="space-y-3">
                                <div className="form-control">
                                    <input type="text" className="input input-bordered"
                                     placeholder="Enter Email Address"/>
                                </div>
                                <div className="form-control">
                                    <Link to="" className="bg-[#FF5A3A] p-4 text-center w-[144px] rounded-lg
                                     text-white font-bold">Subscribe</Link>
                                </div>
                                <div>
                                    <p className="text-[15px] text-[#B1B1B1]">We never span you!</p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-[18px] font-bold text-white">Contact Us</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-4 items-center text-white">
                                <CiLocationOn className="text-[30px] font-bold"></CiLocationOn>
                                <p>121 King St, Melbourne den 3000, Australia</p>
                            </div>
                            <div className="flex gap-4 items-center text-white">
                                <MdEmail className="text-[30px] font-bold"></MdEmail>
                                <p>labib@gmail.com</p>
                            </div>
                            <div className="flex gap-4 items-center text-white">
                                <IoCallOutline className="text-[30px] font-bold"></IoCallOutline>
                                <p>++01334eewre</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;