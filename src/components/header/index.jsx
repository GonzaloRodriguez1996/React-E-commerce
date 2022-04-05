import React,{useContext} from 'react';
import BookLogo from "../../images/booklogo.png"
import { DataContext } from '../../context/DataProvider';

export const Header = () => {
   const value = useContext(DataContext);
   const [menu, setMenu] = value.menu;
   const [cart] = value.cart

   const toggleMenu = () =>{
       setMenu(!menu)
      
   }
    return(
        
        <div class>
        <header>
           
             <a href="/">
              <div className='logo'>
                  <img src={BookLogo} alt='logo' width="170"/>
              </div>
             </a>
             <ul>
                 <li>
                     <a href="/">INICIO</a>
                 </li>
                 <li>
                     <a href="/Products">NUESTROS PRODUCTOS</a>
                 </li>
             </ul>
             <div className="cartIcon" onClick={toggleMenu}>
               <box-icon name="cart"></box-icon>
               <span className='item__total'>{cart.length}</span>
             </div>
        </header>
       

        </div>
        
    )
}