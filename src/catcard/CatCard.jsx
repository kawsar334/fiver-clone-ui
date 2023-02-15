import { Link } from "react-router-dom";
import "./catcard.scss";

const CatCard = ({item}) => {
  return (
    <Link to={`/gigs/?cat=design`  }  >
      <div className="catCard">
        <img src={item.img} alt="" />
        <p className="desc" >{item.desc}</p>
        <p className="title">{item.title}</p>
      </div>
    </Link>
  )
}

export default CatCard