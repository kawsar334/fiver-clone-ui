import "./Add.scss";





const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig </h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text " placeholder="e.g. I will somethins i'm really good at " />
            <label htmlFor="cats">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="webdevelopment">web development</option>
              <option value="Animation">Animation</option>
              <option value="music">music</option>
              <option value="ai">ai</option>
            </select>
            <label htmlFor="">Cover Image </label>
            <input type="file"  />
            <label htmlFor="">Upload  Image </label>
            <input type="file" multiple />

            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Brief Descriptions to introduce your service to customers "></textarea>
            <button>Create</button>

          </div>
          <div className="right">
            <label htmlFor="">service Title</label>
            <input type="text" name="" id="" placeholder="e.g. One-page web design " />
            <label htmlFor="">Short  Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="Shor description of your service ."></textarea>
            <label htmlFor="">Delivery Time(e.g. 3 days ) </label>
            <input type="number" name="" id="" placeholder=""min={1} />
            <label htmlFor="">Revision Number</label>
            <label htmlFor="">Add Features</label>
            <input type="text"placeholder="Features" />
            <input type="text" placeholder="e.g. hosting " />
            <label htmlFor="">Price</label>
            <input type="number" name="" id="" placeholder="" min={1} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Add