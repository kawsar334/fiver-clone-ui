import "./featured.scss";




const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                  <h1>Find the Perfect <i>freelance</i> serices for Your business </h1>
                <div className="search">
                    <div className="searchInput">
                          {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        <input type="text" placeholder="Try building mobile app " />
                        <button className="searchbtn">Search</button>
                    </div>
                </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web design </button>
                          <button>Web design </button>
                          <button>Grapics design </button>
                          <button>Wordpress .</button>
                          <button>Ai serices. </button>
                      <button>Web design </button>
                      <button>Web design </button>
                      <button>Grapics design </button>
                      <button>Wordpress .</button>
                      <button>Ai serices. </button>
                    </div>
            </div>
            <div className="right">
                  <img src="./img/mee.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured