import { Link } from "react-router-dom"
import "./projectCart.scss"

const ProjectCard = ({item}) => {
  return (
      <Link to={`/`}  >
          <div className="projectCard">
              <img src={item.img} alt="" />
              <p className="desc" >{item.desc}</p>
              <p className="title">{item.title}</p>
              
          </div>
      </Link>
  )
}

export default ProjectCard