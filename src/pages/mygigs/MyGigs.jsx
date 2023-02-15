import { Link } from "react-router-dom"
import "./mygigs.scss"

const MyGigs = () => {
  return (
    <div className="mygigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">

          <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <i className="fa-solid fa-trash"></i>
            </td>
          </tr>

        </table>
      </div>
    </div>
  )
}

export default MyGigs