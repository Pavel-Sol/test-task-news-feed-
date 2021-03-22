import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
   return (
      <div>
         <div className='nav-list'>
            <div>
               <NavLink className='nav_item' to='/'>Главная</NavLink>
            </div>
            <div>
               <NavLink className='nav_item' to='/liked'>Понравились</NavLink>
            </div>
            <div>
               <NavLink className='nav_item' to='/archive'>Архив</NavLink>
            </div>
         </div>
      </div>
   )
}

export default Navbar