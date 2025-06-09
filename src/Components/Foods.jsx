import React, { useState } from "react";
import { food_list } from "../assets/fooditems/assets";

const Foods = () => {
  const [sortOption, setSortOption] = useState("");
  const [search,setSearch]=useState('')



  const sortedFoods = [...food_list].filter(food=>food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ).sort((a,b)=> {
    if (sortOption === "low-to-high") {
      return a.price - b.price;
    } else if (sortOption === "high-to-low") {
      return b.price - a.price;
    }
  });
  return (
    <div className="container mt-4">
      <div>
        <div className="d-flex align-items-center justify-content-between mb-4 gap-5">
          <h2 className="mb-4">All Foods</h2>
          <input type="search" className="foodSearch form-control" placeholder="search" onChange={(e)=>setSearch(e.target.value)}/>
        </div>

        <select
          className="mb-5"
          id=""
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
          }}
        >
          <option value="">sort by</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      <div className="row">
        {sortedFoods.map((food, id) => (
          <div key={id} className="col-md-3 mb-4">
            <div className="card h-100 food-card">
              <img
                src={food.image}
                className="card-img-top"
                alt={food.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">{food.description}</p>
                <p className="card-text fw-bold">${food.price}</p>
                <button className="btn btn-success px-4 py-2 rounded">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
