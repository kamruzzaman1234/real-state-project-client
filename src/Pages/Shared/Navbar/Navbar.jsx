import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Navbar = ({bookings})=>{
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut() 
      .then(res => {})
    
      .then(data => {
        console.log(data); 
      })
     
  };
  
    return(
        <div className="max-w-7xl mx-8 md:mx-12 lg:mx-auto">
 <div className="navbar bg-white rounded-lg px-11">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 text-[18px] rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/property">Property</Link></li>
      
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <img src="https://i.ibb.co.com/jhP86RL/Vector.png" alt="" />
    <Link to="/" className="btn btn-ghost text-xl hidden lg:block">Easy Housing</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-[18px] px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/property">Property</Link></li>
      {/* <li><Link to="/bookings" className="bg-[#FF5A3A] 
      font-bold text-white">Bookings</Link></li> */}
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
   {
    user? <div className="relative">
         <ul className="menu menu-horizontal px-1">
      <li><a></a></li>
      <li className="">
        <details className="border-2 border-orange-300 rounded-lg ">
          <summary>{user?.email}</summary>
          
          <ul className="bg-base-100 rounded-t-none">
          <li><Link to="/bookings" className="bg-[#FF5A3A]
          text-white font-bold">Bookings</Link></li>
            <li> <button onClick={handleLogOut}>Log Out</button> </li>
           
            
          </ul>
        </details>
      </li>
    </ul>
    <div className="w-[30px] h-[30px] flex items-center justify-center
     bg-[#FF5A3A] rounded-full absolute text-white font-bold right-2 -top-3">
          {bookings?.length || 1}
          </div>
      
    </div> : <div className="space-x-2">
       <Link to="/login" className="px-5 md:px-7 lg:px-8 py-2 text-white font-bold rounded-lg  bg-[#FF5A3C]">
        Login
    </Link>
    <Link to="/register" className="px-5 md:px-7 text-white font-bold lg:px-8 py-2 rounded-lg  bg-[#FF5A3C]">
        Register
    </Link>
    </div>
   }
    
  </div>
</div>
        </div>
    )
}
export default Navbar;