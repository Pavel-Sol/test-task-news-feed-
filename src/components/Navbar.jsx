import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
   return (
      <div>
         <div className='nav-list'>
            <div>
               <NavLink to='/'>Главная</NavLink>
            </div>
            <div>
               <NavLink to='/liked'>Понравились</NavLink>
            </div>
            <div>
               <NavLink to='/archive'>Архив</NavLink>
            </div>
         </div>
      </div>
   )
}

export default Navbar