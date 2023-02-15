import { Link } from "react-router-dom"
import "./message.scss"

const Message = () => {
  return (
    <div className="message">
      <div className="container">
          <span className="breadcrumbs">
          <Link to="/messages">{"<<"} MESSAGES</Link> KAWSAR FIROZ
          </span>
        <div className="messages ">
            <div className="item">
            <img src="https://images.pexels.com/photos/15316463/pexels-photo-15316463.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni similique veniam nulla deserunt voluptatem nesciunt delectus voluptates consequuntur dicta doloribus sequi quaerat mollitia neque labore eaque nemo, pariatur minima.</p>
            </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/15316463/pexels-photo-15316463.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni similique veniam nulla deserunt voluptatem nesciunt delectus voluptates consequuntur dicta doloribus sequi quaerat mollitia neque labore eaque nemo, pariatur minima.</p>
          </div>
          {/*  */}
          <div className="item">
            <img src="https://images.pexels.com/photos/15316463/pexels-photo-15316463.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni similique veniam nulla deserunt voluptatem nesciunt delectus voluptates consequuntur dicta doloribus sequi quaerat mollitia neque labore eaque nemo, pariatur minima.</p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/15316463/pexels-photo-15316463.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni similique veniam nulla deserunt voluptatem nesciunt delectus voluptates consequuntur dicta doloribus sequi quaerat mollitia neque labore eaque nemo, pariatur minima.</p>
          </div>
          {/*  */}
          <div className="item">
            <img src="https://images.pexels.com/photos/15316463/pexels-photo-15316463.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni similique veniam nulla deserunt voluptatem nesciunt delectus voluptates consequuntur dicta doloribus sequi quaerat mollitia neque labore eaque nemo, pariatur minima.</p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/15316463/pexels-photo-15316463.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni similique veniam nulla deserunt voluptatem nesciunt delectus voluptates consequuntur dicta doloribus sequi quaerat mollitia neque labore eaque nemo, pariatur minima.</p>
          </div>
          </div>
          {/*  */}
          <hr />
          <div className="write">
            <textarea name="" id="" cols="30" rows="10" placeholder="Write a message"></textarea>
            <button>Send</button>
          </div>

      </div>
    </div>
  )
}

export default Message