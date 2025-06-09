import React from "react";
import { menu_list, food_list, assets } from "../assets/fooditems/assets";
const FoodList = ({ onSelectCatogory }) => {
  return (
    
    <div className="container-fluid my-4">
      <h2 className="mb-3">Menu</h2>
      <div className="overflow-auto">
        <ul className="d-flex flex-row gap-3 list-unstyled mb-0">
         {menu_list.map((menu, index) => {
          return (
            <li key={index} className="text-center">
              <img src={menu.menu_image} alt={menu.menu_name} />
              <p className="mt-2 mb-0">{menu.menu_name}</p>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
};

export default FoodList;