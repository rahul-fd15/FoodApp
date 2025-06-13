import React, { useState } from 'react';
import AdminControlPanel from '../Components/AdminControlPanel';
  import { useNavigate } from 'react-router-dom';
const AdminLoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple check — this can be replaced with real logic later
    if (name === 'Rahul' && password === 'Rahul123') {
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/panel')
    } else {
      alert('Invalid name or password ❌');
    }

    // Clear inputs
    setName('');
    setPassword('');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="border rounded p-4 shadow w-100" style={{ maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Admin Login</h3>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter admin name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-danger w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
