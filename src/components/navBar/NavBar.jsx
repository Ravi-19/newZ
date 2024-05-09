import { useState } from 'react';
import './navBar.css'

function NavBar({updateQuery}) {
  let [data,newData] = useState('') ;
 // console.log(data) ;  
  return (
    <div className='nav-bar container'>
      <div className='logo'>
        Daily News
      </div>
        <ul className='navigation-list'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      <div >
        <input  className='search-box' type='text' placeholder='search news ..'  onChange={(e)=>newData(e.target.value)}/>
        <button className='search-submit' onClick={()=>updateQuery(data)}>search</button>
      </div>

    </div>
  )
}

export default NavBar