import { Link } from "react-router-dom"
import "./messages.scss"

const Messages = () => {

  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quo?"
  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>

        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>
              kawsar firoz
            </td>
            <td><Link to="/message/:123">{message.substring(0, 40)}...</Link></td>
            <td>1 day  ago</td>
            <td><button>Mark as Read </button></td>
           
          </tr>

          <tr className="active">
            <td>
              kawsar firoz
            </td>
            <td><Link to="/message/:123">{message.substring(0, 40)}...</Link></td>
            <td>1 day  ago</td>
            <td><button>Mark as Read </button></td>

          </tr>
          <tr>
            <td>
              kawsar firoz
            </td>
            <td><Link to="/message/:123">{message.substring(0, 40)}...</Link></td>
            <td>1 day  ago</td>
            <td><button>Mark as Read </button></td>

          </tr>
        
        
         
        </table>
      </div>
    </div>
  )
}

export default Messages