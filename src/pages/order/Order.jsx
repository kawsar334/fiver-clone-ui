import { Link } from "react-router-dom"
import "./order.scss"

const Order = () => {
  const currentUser = {
    id: 1,
    username: "kawsar firoz",
    isSeller: true,


  }
  

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
          
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller?"Buyer":"Seller"}</th>
            <th>contact</th>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>kawsar firoz</td>
            <td>
              <i className="fa-solid fa-message"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>kawsar firoz</td>
            <td>
              <i className="fa-solid fa-message"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>kawsar firoz</td>
            <td>
              <i className="fa-solid fa-message"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10458386/pexels-photo-10458386.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            </td>
            <td>gig1</td>
            <td>88</td>
            <td>kawsar firoz</td>
            <td>
              <i className="fa-solid fa-message"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Order