import './NavbarStyles.css'
import React ,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from "react-icons/fa"
// import Footer from '../components/Footer'
<link href='https://fonts.googleapis.com/css?family=Roboto:500,900,100,300,700,400' rel='stylesheet' type='text/css'></link>
const Navbar = () => {
    const [click,setClick]=useState(false);  
    const handleClick=()=>setClick(!click);
    const [color,setColor]=useState(false);
    const changeColor=()=>{
         if(window.scrollY>=100){
             setColor(true);
         }
         else{
             setColor(false);
         }
    };
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"header header-bg":"header"}>
        <Link className='logo_div' to="/">
            <img className='logo' src="https://i.imgur.com/tIW34tf.png" alt='logo'/>
        </Link>
        <ul className={click ?"nav-menu active" :"nav-menu fill"}>
            <li className='nav-heading'>
                <Link  to="/">HOME</Link>
            </li>
            <li >
                <Link className='nav-heading'to="/About">ABOUT</Link>
            </li>
            <li >
                <Link className='nav-heading'to="/Events">EVENTS</Link>
            </li>
            <li >
                <a target="_blank" rel='noreferrer' className='nav-heading' href="https://drive.google.com/file/d/15Z3_MBYEt9eawQZEqkHyWFzgquXQSXzk/view?usp=drivesdk">RULEBOOK</a>
            </li>
            <li >
                <Link className='nav-heading'to="/Gallery">GALLERY</Link>
            </li>
            <li >
                <Link className='nav-heading'to="/Team">TEAM</Link>
            </li>
            {/* <li >
                <Link to="className='nav-heading'">CONTACT</Link>
            </li> */}
        </ul>
        <div className='hamburger' onClick={handleClick}>
            {click? <FaTimes size={20} style={{color:"#fff"}}/>: 
            <FaBars size={20} style={{color:"#fff"}}/>}
        </div>
    </div>
  )
}

export default Navbar