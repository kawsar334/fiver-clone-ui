import "./gig.scss"
import Slider from 'infinite-react-carousel';
import { images } from "../../data";

const Gig = () => {

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVER {">"} GRAFPHICS & DESIGN</span>
          <h1>I will create ai genarated art for you .</h1>
          <div className="user">
            <img src="https://images.pexels.com/photos/5713390/pexels-photo-5713390.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="pp" />
            <span className="username">kawsar firoz </span>
            <div className="starts">
              <i className="fa-regular fa-star" style={{color:"yellow"}}></i>
              <i className="fa-regular fa-star" style={{color:"yellow"}}></i>
              <i className="fa-regular fa-star" style={{color:"yellow"}}></i>
              <i className="fa-regular fa-star" style={{color:"yellow"}}></i>
              <i className="fa-regular fa-star" style={{color:"yellow"}}></i>
              <i className="fa-regular fa-star" style={{color:"yellow"}}></i>
              <span>5</span>
            </div>
          </div>
          <Slider dots slidesToShow={1} arrowsScroll={1} className="slider">
            {images.map((img,i)=>(
              <img src={img.url} key={i} />
            ))}
        
          </Slider>
          <h2>About this Gig</h2>
          <p className="desc">
            Hi! My name is Betty, and I'II be glad to help you with your project today!
            I'm a professional WordPress website design specialist. Over the years, my focus has been on creating a custom WordPress website design for user experience with effective messaging that engages target audiences, delivers results, and converts visitors into users.
            I have design hundreds of Wordpress websites for different Industries across the globe, helping you with your project won't be a problem for me.️
          </p>
          {/* ==================seller section */}
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src="https://images.pexels.com/photos/5713390/pexels-photo-5713390.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="profilePictuer" />
              <div className="info">
                <span>kawsar firoz</span>
                <div className="starts">
                  <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                  <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                  <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                  <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                  <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                  <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                  <span>5</span>
                </div>
                <button>Contact Me </button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">KSA </span>
                </div>
                <div className="item">
                  <span className="title">mEMBER SINCE </span>
                  <span className="desc">Aug 2022  </span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">4 hours </span>
                </div>
              </div>
              <hr />
              <p>GramUp holds successful history in the web design and development world. We have worked with some of the very reputed companies and undertake high profile projects like anything. Whether our clients have a small business website or are looking for developing a new website, our vision remains the same, i.e. result driven work without extending the deadline.</p>
            </div>
          </div>
          {/* sellr section section end  */}
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src="http://127.0.0.1:5173/img/mee.png" className="pp" alt="" />
                <div className="info">
                  <span>kawsar firoz</span>
                  <div className="country">
                    <i class="fa-regular fa-flag"></i>
                    <span>Bangladesh</span>
                  </div>
                </div>
              </div>
              <div className="starts">
                <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                <i className="fa-regular fa-star" style={{ color: "yellow" }}></i>
                <span>5</span>
              </div>
              <p> We have worked with some of the very reputed companies and undertake high profile projects like anything. Whether our clients have a small business website or are looking for developing a new website, our vision remains the same, i.e. result driven work without extending the deadline</p>
              <div className="helpful">
                <span>Helpful ?</span>
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Yes</span>
                <i class="fa-regular fa-thumbs-down"></i>
                <span>No</span>
              </div>
            </div>
            <hr />           
          </div>
        </div>

        {/* right ================ */}
        <div className="right">
          <div className="price">
            <h3>AI genarator Imge </h3>
            <h2>$ 59.00</h2>
            </div>
            <p>
              I will Create a unique high quality Ai genarated image based on a description that you give me 
            </p>
            <div className="details">
              <div className="item">
            <i className="fa-regular fa-circle-check"></i>
            <span>2 days Delivery </span>
              </div>
            <div className="item">
              <i className="fa-regular fa-circle-check"></i>
              <span>3 reviews </span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <i className="fa-regular fa-circle-check"></i>
              <span>Promt writing</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-circle-check"></i>
              <span>Promt writing</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-circle-check"></i>
              <span>Promt writing</span>
            </div>
            <div className="item">
              <i className="fa-regular fa-circle-check"></i>
              <span>Promt writing</span>
            </div>
          </div>
              <button>continue</button>
        </div>
      </div>
    </div>
  )
}

export default Gig ;