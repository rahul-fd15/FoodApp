import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center">🛒 Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="card p-4 shadow-sm mb-4" key={index}>
            <div className="row align-items-center mb-3">
              <div className="col-md-6">
                <h5 className="mb-1">{item.name}</h5>
                <p className="text-muted mb-0">
                  ${item.price}*{item.quantity || 1}=
                  <strong>${item.price * (item.quantity || 1)}</strong>
                </p>
              </div>
              <div className="col-md-6 text-md-end mt-3 mt-md-0">
                <div
                  className="input-group justify-content-md-end"
                  style={{ maxWidth: "140px" }}
                >
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={() => dispatch(decrementQuantity(item._id))}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={item.quantity || 1}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={() => dispatch(incrementQuantity(item._id))}
                  >
                    +
                  </button>
                </div>
                <button className="btn btn-sm btn-danger mt-2" onClick={()=>dispatch(removeFromCart(item._id))}>
                  Remove
                  
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="text-end fw-bold fs-5 mt-4">
        Total: $
        {cartItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="text-center">
          <button className="btn btn-success mt-4 px-5">Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
