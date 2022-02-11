import {useState} from 'react';

//form to add movie:
const AddMovieForm=(props)=> {
    const [name, setName] = useState("");
    function handlechange(e) {
      setName(e.target.value);
    }
    function handleSubmit(e) {
      e.preventDefault();
      props.onAdd(name);
      setName("");
    }
//to rturn form:
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handlechange} />
        <input type="submit" value="Add Item" />
      </form>
    );
  }
  export default AddMovieForm;