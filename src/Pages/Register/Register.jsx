import { useContext, useState } from "react";
import { FaRegEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, user } = useContext(AuthContext);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        // Check if any field is empty
        if (!name || !email || !password || !confirmPassword) {
            alert("All fields are required!");
            return;
        }

        // Check if email is valid using a simple regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                if(user.insertedId)
                console.log(user);
                toast("Register Successfully")
                form.reset();
            })
            .catch(error => console.log(error.message));
    };

    return (
        <div className="py-[150px] mt-11 max-w-7xl mx-auto" style={{ backgroundImage: `url('https://i.ibb.co.com/bbbsTtF/pexels-sibi-mathew-410029-1092063.jpg')`, backgroundRepeat: "no-repeat",
         backgroundSize:'cover', backgroundAttachment: "fixed" }}>
            <ToastContainer></ToastContainer>
            <div className="mx-auto border-2 border-gray-300 rounded-lg w-[414px] bg-gray-100" style={{backgroundImage:`url('')`}}>
                <div className="flex justify-center items-center mb-10">
                    <h2 className="text-[36px] text-[#FF5A3A] pt-10 font-bold">Register</h2>
                </div>
                <div>
                    <form action="" className="px-10 space-y-6 py-10" onSubmit={handleRegister}>
                        <div className="form-control text-black">
                            <label htmlFor="name" className="font-bold">Name</label>
                            <input type="text" name="name" placeholder="Enter Name" className="input input-bordered"/>
                        </div>
                        <div className="form-control text-black">
                            <label htmlFor="email" className="font-bold">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter Email" className="input input-bordered"/>
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
                        <div className="form-control relative">
                            <label htmlFor="confirm password" className="text-black font-bold">Confirm Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5A3C]"
                                placeholder="Enter your confirm password"
                            />
                            <button type="button" className="absolute right-5 top-9" onClick={togglePasswordVisibility}>
                                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
                            </button>
                        </div>
                        <div>
                            <button type="submit" className="bg-[#FF5A3A] w-full p-3 rounded-full font-bold text-white text-[18px]">Register</button>
                        </div>
                        <div className="divider divider-neutral text-[#FF5A3A]">Or signup with</div>
                        <div className="my-10">
                            <button className="btn btn-outline w-full">
                                <FaGoogle className="text-[#4285F4] text-[18px]"/>
                                <span className="text-[18px]">Google</span>
                            </button>
                        </div>
                        <div className="flex justify-around">
                            <h4 className="font-bold">Already have an account <span className="text-[#FF5A3A] underline"><Link to="/login">Login</Link></span></h4>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
