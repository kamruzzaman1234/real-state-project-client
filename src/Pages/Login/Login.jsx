import { useState, useContext } from "react";
import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext);
    const [rememberMe, setRememberMe] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const navigate = useNavigate()
    const location = useLocation()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        
        if (!email) {
            alert("Email field is required!");
            return;
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        
        if (!password) {
            alert("Password field is required!");
            return;
        }

        
        if (rememberMe) {
            console.log("User wants to be remembered.");
        }

       
        signIn(email, password)
            .then(result => {
                const logInUser = result.user;
                console.log("Successfull login",logInUser);
                
                const user = {email}

                axios.post('https://real-state-project-server.onrender.com/jwt', user, {withCredentials: true})
                .then(res=> {
                    console.log(res.data)
                    if(res.data.success){
                        toast("Login Successfully")
                        navigate(location?.state ? location?.state: '/' )
                
                    }
                })
            })
            .catch(error => console.log(error.message));
    };

    return (
        <div className="py-[150px] mt-11 max-w-7xl mx-auto" 
        style={{ backgroundImage: `url('https://i.ibb.co.com/bbbsTtF/pexels-sibi-mathew-410029-1092063.jpg')`, 
        backgroundRepeat: "no-repeat", backgroundSize: 'cover',
         backgroundAttachment: "fixed" }}>
            <ToastContainer></ToastContainer>
            <div className="mx-auto border-2 border-gray-300 rounded-lg w-[414px] bg-gray-100" style={{ backgroundImage: `url('')` }}>
                <div className="flex justify-center items-center mb-10">
                    <h2 className="text-[36px] text-[#FF5A3A] pt-10 font-bold">Login</h2>
                </div>
                <div>
                    <form className="px-10 space-y-6 py-10" onSubmit={handleLogin}>
                        <div className="form-control text-black">
                            <label htmlFor="email" className="font-bold">Email</label>
                            <input type="email" name="email" placeholder="Enter Email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label htmlFor="password" className="text-black font-bold">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5A3C]"
                                placeholder="Enter your password"
                            />
                            <button type="button" className="absolute right-5 top-9" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                            </button>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-3">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={() => setRememberMe(!rememberMe)}
                                />
                                <label className="text-[18px] font-bold" htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <div>
                                <Link to="" className="underline font-bold text-[18px]">Forgot Password</Link>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="bg-[#FF5A3A] w-full p-3 rounded-full font-bold text-white text-[18px]">Login</button>
                        </div>
                        <div className="divider divider-neutral text-[#FF5A3A]">Or login With</div>
                        <div className="my-10">
                            <button className="btn btn-outline w-full">
                                <FaGoogle className="text-[#4285F4] text-[18px]" />
                                <span className="text-[18px]">Google</span>
                            </button>
                        </div>
                        <div className="flex justify-around">
                            <h4 className="font-bold">Don't have an account <span className="text-[#FF5A3A] underline"><Link to="/register">Register</Link></span></h4>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
