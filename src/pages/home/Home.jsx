import Featured from "../../components/featured/Featured"
import Slide from "../../components/slide/Slide"
import TrustedBy from "../../components/trustedBy/TrustedBy"
import "./home.scss"
import { cards ,projects} from "../../data"
import CatCard from "../../catcard/CatCard"
import ProjectCard from "../../components/projectCard/ProjectCard"
import { useState } from "react"

const Home = () => {

  return (
    <div className="home">
      
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map((card)=>(
        <CatCard key={card.id} item={card}/>
      ))}

      </Slide>

      <div className="features">
        <div className="container">
        <div className="item">
          <h1>A whole worlld of freelance tlent at your fingrtips.</h1>
          <div className="title">
            <input type="checkbox" name="" id="" />
          The best for every  budget 
          </div>
          <p>
            Find heigh-quality services at every price point. No hourly rates, just project-based pricing. 
          </p>
            <div className="title">
              <input type="checkbox" name="" id="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within minutes.
            </p>
            <div className="title">
              <input type="checkbox" name="" id="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released until you approve the work.
            </p>
            <div className="title">
              <input type="checkbox" name="" id="" />
              24/7 support
            </div>
            <p>
              Questions? Our round-the-clock support team is available to help anytime, anywhere.
            </p>
        </div>
        <div className="item">
          <video src="./videos/v.mp4" autoPlay={true} controls/>
          
        </div>
        </div>
      </div>
      {/* ============================= */}
      <div className="features dark">
        <div className="container">
          <div className="item">        
          <h1>fiverr business </h1>
            <h1>A business solution designed for teams</h1>
            <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
            <div className="title">
              <input type="checkbox" name="" id="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <input type="checkbox" name="" id="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <input type="checkbox" name="" id="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
           <button>Explore Fiverr Business.</button>
          </div>

          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="..." />

          </div>

        </div>
      </div>
      {/* =============================*/}
      <Slide slidesToShow={5} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}

      </Slide>

    </div>
  )
}

export default Home