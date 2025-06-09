import React from 'react';

const Contact = () => {
  return (
    

    
    <div className="container my-5 ContactPage">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5 lead">
        Have questions, feedback, or just want to say hello? We're here to help!
      </p>

      <div className="row">
        <div className="col-md-6 mb-4">
          <h4>Send Us a Message</h4>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div className="col-md-6">
          <h4>Contact Information</h4>
          <p><strong>📍 Address:</strong> 123 Foodie Lane, Flavor Town, USA</p>
          <p><strong>📞 Phone:</strong> +1 (800) 123-4567</p>
          <p><strong>📧 Email:</strong> support@foodieexpress.com</p>
          <h5 className="mt-4">Business Hours</h5>
          <p>Monday - Sunday: 9:00 AM – 11:00 PM</p>
        </div>
      </div>
    </div>
   
  );
};

export default Contact;
