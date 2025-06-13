
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AdminControlPanel = () => {
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const inputRef = useRef();
  const navigate = useNavigate();

  // Load items from localStorage
  useEffect(() => {
    const storedItems = localStorage.getItem("foodItems");
    if (storedItems) {
      setFoodItems(JSON.parse(storedItems));
    }
  }, []);

  // Save items to localStorage
  useEffect(() => {
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
  }, [foodItems]);

  const addFoodItem = () => {
    if (foodName && foodPrice && foodImage) {
      const newItem = { name: foodName, price: foodPrice, image: foodImage };
      setFoodItems([...foodItems, newItem]);
      setFoodName("");
      setFoodPrice("");
      setFoodImage("");
      inputRef.current.focus();
    }
  };

  const deleteFoodItem = (index) => {
    const updated = foodItems.filter((_, i) => i !== index);
    setFoodItems(updated);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin");
  };

  return (
    <div className="mt-5 w-100" style={{ maxWidth: "600px", margin: "auto" }}>
      <h4 className="mb-3">🍕 Admin Control Panel</h4>

      <div className="mb-3">
        <input
          type="text"
          ref={inputRef}
          className="form-control mb-2"
          placeholder="Food name"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
        />
        <input
          type="number"
          className="form-control mb-2"
          placeholder="Food price"
          value={foodPrice}
          onChange={(e) => setFoodPrice(e.target.value)}
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Image URL"
          value={foodImage}
          onChange={(e) => setFoodImage(e.target.value)}
        />
        <button className="btn btn-success w-100" onClick={addFoodItem}>
          Add Food Item
        </button>
      </div>

      <ul className="list-group">
        {foodItems.map((item, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex align-items-center">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  marginRight: "15px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div className="flex-grow-1">
                <h6 className="mb-1">{item.name}</h6>
                <p className="mb-0 text-muted">₹ {item.price}</p>
              </div>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteFoodItem(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        className="btn btn-outline-danger mt-3 w-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminControlPanel;
