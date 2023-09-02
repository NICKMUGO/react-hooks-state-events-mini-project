import React from "react";
function CategoryFilter({categories,selectedCategory,selectTask}) {
function handleClick(category){
  selectTask(category)
}
 const btn= categories.map((category)=>{return <button className={selectedCategory===category? "selected": null}  key={category} onClick={()=>handleClick(category)}>{category}</button>})

   return (
    <div className="categories">
      <h5>Category filters</h5>
      {btn}
    </div>
  );
}
export default CategoryFilter;