
import React from 'react';

const Cart = () => {
  return (
   

    
    <div className="container my-5">
      <h1 className="text-center mb-4">Cart</h1>

      <div className="card p-4 shadow-sm">
        <div className="row align-items-center mb-3">
          <div className="col-md-6">
            <h5 className="mb-1">Product Name</h5>
            <p className="text-muted mb-0">$10.00</p>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <div className="input-group justify-content-md-end" style={{ maxWidth: '140px' }}>
              <button className="btn btn-outline-primary" type="button">-</button>
              <input
                type="text"
                className="form-control text-center"
                value="1"
                readOnly
              />
              <button className="btn btn-outline-primary" type="button">+</button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-success mt-4 px-5">Place Order</button>
        </div>
      </div>
    </div>
  
  );
};

export default Cart;
