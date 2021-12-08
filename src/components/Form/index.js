import { useState } from "react";

function Form(props) {
const [product, setProduct] = useState({name: '', price: '', description: ''}); 

const handleSubmit = e => {
  console.log('handleSubmit clicked');
  e.preventDefault();
};


    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label>
            <input placeholder='product name'
            type="text" 
            name="name" 
            
            />
          </label>
          <label>
            <input placeholder='price' type="text" name="price" />
          </label>
          <label>
            <input placeholder='description' type="text" name="description" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  export default Form;
