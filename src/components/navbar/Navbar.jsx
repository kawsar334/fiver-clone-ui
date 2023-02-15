import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss" ;
 
const Navbar = () => {
    const {pathname} =useLocation();
    console.log(pathname)
    const [open, setOpen] =useState(false)
    const [active, setActive] =useState(false);
    const isActive=()=>{
        window.scrollY > 1 ? setActive(true) : setActive(false);
    }
    useEffect(()=>{
        window.addEventListener("scroll",isActive );
        
        return ()=>{
            window.removeEventListener("scroll", isActive);
        }
    },[]);

    const currentUser ={
        id:1,
        username:"kawsar firoz",
        isSeller:true,


    }
  return (
    <div className={active || pathname !== "/"? "navbar active":"navbar"}>
        <div className="container">
            <Link  to="/" className="logo">
                <span className="text">fiverr</span>
                <span className="dot">.</span>
            </Link>
            <div className="links">

                <Link  to="/">
                <span>Fiverr business</span>
                </Link>
                  <Link to="/">
                  <span>Explore</span>
                  </Link>
                  <Link to="/">
                  <span>Engilsh</span>
                  </Link>
                  <Link to="/">
                  <span>Signin</span>
                  </Link>
                 {!currentUser?.isSeller && <Link to="/">
                  <span>Become a seller</span>
                  </Link>}
               
                
                  {!currentUser?.isSeller && <button>Join</button>}

            {currentUser.isSeller &&(
                <div className="user"  onClick={()=>setOpen(!open)}>
                          <img src="https://images.pexels.com/photos/13132366/pexels-photo-13132366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="userAvatar" />
                    <span>{currentUser.username}</span>
                   {open && <>
                    {currentUser?.isSeller && <div className="options">
                        <Link to="/mygigs">Gigs</Link>
                        <Link to="/add">Add New Gigs</Link>
                        <Link to="/orders">Orders</Link>
                        <Link to="/messages">Messages</Link>
                        <Link to="/">Logout </Link>
                    
                    </div>}

                    </>}


                </div>
            ) }
            </div>
        </div>
       { active || pathname !=="/" && <>
       <hr />
        <div className="menu">
                  <Link to="/messages">Grafics & Design </Link>
                  <Link to="/orders">Vido & Animation</Link>
                  <Link to="/messages">Writing & translation</Link>
                  <Link to="/">Ai Services </Link>
                  <Link to="/">Digital marketing  </Link>
                  <Link to="/">Music & video  </Link>
                  <Link to="/">Programming & Tech.  </Link>
                  <Link to="/">Business  </Link>
                  <Link to="/">LifeStyle.  </Link>



              </div> </>}
    </div>
  )
}

export default Navbar