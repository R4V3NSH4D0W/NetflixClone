import React from 'react'
import { Link ,useNavigate,useLocation} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import Searchbar from './Searchbar'
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  const {user, logOut}=UserAuth()
  const navigate=useNavigate()
  const {pathname}=useLocation()
  const handelLogout =async()=>{
    try{
      await logOut();
      navigate('/');
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className=' flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
         <h1 className=' text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
   
      </Link>
    
   {user?.email ?    <div className='flex justify-start items-center'>
   {pathname !== "/search" && (
        <Link to="/search">
          <FaSearch className="cursor-pointer text-white mr-4 transition-transform duration-300 hover:transform hover:scale-125" />
        </Link>
      )}
       <Link to='/account'>
       <button className=' text-white pr-4'>Account</button>
       </Link>
  
     <button onClick={handelLogout} className=' bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Logout</button>
  
     
    </div> :
       <div className='flex justify-start items-center'>
        {pathname !== "/search" && (
        <Link to="/search">
          <FaSearch className="cursor-pointer text-white mr-4 transition-transform duration-300 hover:transform hover:scale-125" />
        </Link>
      )}
       <Link to='/login'>
       <button className=' text-white pr-4'>Sign In</button>
       </Link>
     <Link to='/signup'>
     <button className=' bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign up</button>
     </Link>
     
    </div>}
    </div>
  )
}

export default Navbar