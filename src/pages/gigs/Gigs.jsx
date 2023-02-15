import { useState } from "react"
import { gigs } from "../../data"
import GigCard from "../../gigcard/GigCard";
import "./gigs.scss";

const Gigs = () => {

  const [sort , setSort] =useState("sales");
  const [open, setOpen] =useState(false);

const reSort =(type)=>{
  setSort(type);
  setOpen(false);
}
  
  return (
    <div className="gigs">
      <div className="container">
      <span className="breadcrumbs">Fiverr {">"} GRAPHICS & DESIGN</span>
      <h1>Ai Artists</h1>
      <p>
        Explore the boundaties of art and techonology with Fiverr's Ai artists
      </p>
      <div className="menu">
        <div className="left">
          <span>Budged</span>
          <input type="text" placeholder="min " />
          <input type="text" placeholder="Max " />
          <button>Apply </button>
        </div>
        <div className="right">
          <span className="sortby">SortBy</span>
            <span className="sortType">{sort === "sales" ?"BestSelling": "Newest"} </span>
            <i class="fa-solid fa-chevron-down" onClick={()=>setOpen(!open)}></i>
           {open &&<div className="rightMenu">
              {sort === "sales"?<span onClick={()=>reSort("createdAt")}>Newest </span>:
              <span onClick={()=>reSort("sales")}>Best selling. </span>}
            </div>}
        </div>

       
      </div>

      <div className="cards">
          {gigs.map((gig) => (
            <GigCard item={gig} />
          ))}
      </div>
       
      </div>
     
    </div>
  )
}

export default Gigs