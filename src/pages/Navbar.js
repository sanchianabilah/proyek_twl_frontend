import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      
      <div className="w-full h-16 flex items-center px-14 justify-between" style={{ backgroundColor: '#e6e8c6' }}>
       <Link to={"/"} className="text-3xl font-semibold font-algerian" style={{ color: 'orange', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>OEMAH KRAJAN HOMESTAY</Link>

        
      <div className="flex">
      <Link to={"/add-user"} className="hover:bg-orange-700 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg font-bold py-2 px-2" style={{ backgroundColor: 'orange', color: '#e6e8c6' }}>PENDAFTARAN</Link>
      </div>

      </div>
    </>
  )
}

export default Navbar;



