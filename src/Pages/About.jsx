import React from 'react';
import { assets } from "../assets/fooditems/assets";
const About = () => {
  return (
    

    
    <div className="AboutPage container my-5">
      
      <h1 className="mb-4 text-center">About Us</h1>

      <p className="lead text-center mb-5">
        Welcome to <strong>FoodieExpress</strong> – your favorite online food delivery service bringing delicious meals straight to your doorstep.
      </p>

      <div className="row">
        <div className="col-md-6">
          <h4>Our Mission</h4>
          <p>
            At FoodieExpress, we aim to make food delivery simple, fast, and enjoyable. Whether you're craving healthy salads, spicy noodles, or sweet desserts, our app connects you with a wide variety of quality meals from trusted kitchens.
          </p>
        </div>

        <div className="col-md-6">
          <h4>Why Choose Us?</h4>
          <ul>
            <li>🍽️ Fresh and hygienic food</li>
            <li>🚀 Super-fast delivery</li>
            <li>📱 Easy-to-use mobile app</li>
            <li>💳 Secure online payments</li>
            <li>💬 24/7 customer support</li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-center">Join Us on Our Journey</h4>
        <p className="text-center">
          Whether you're a food lover, a restaurant owner, or a delivery partner – there's a place for you at FoodieExpress.
        </p>
      </div>
    </div>

  );
};

export default About;

