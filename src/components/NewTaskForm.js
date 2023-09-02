import React,{useState} from "react";
function NewTaskForm({categories , onTaskFormSubmit}) {
  const [details , setDetails]=useState("");
  const[category,setCategory]=useState("Code");
  const categoriesList= categories.map((category) => {
    return <option className="selected" key={category}>{category}</option>;
  });
  function handledetails(e){
    console.log(e.target.value)
    setDetails(e.target.value)
  }
  function handleCategory(e){
console.log(e.target.value)
setCategory(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
    onTaskFormSubmit({category:category, text:details})
    setDetails("")
  }
  return(
    <form className="new-task-form" >
      <label>
        Details
        <input type="text" name="text"  onChange={handledetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory}>{categoriesList}</select>
      </label>
      <input type="submit" value="Add task" onSubmit={handleSubmit} />
    </form>
  );
}
export default NewTaskForm;