import React, { useState } from 'react';

const RegisterForm = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    exam: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('userData', JSON.stringify(formData));
    alert('Registration Successful!');
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData && savedData.email === formData.email && savedData.password === formData.password) {
      setUser(savedData); 
    } else {
      alert('Invalid Email or Password!');
    }
  };

  return (
    <div className="container">
      {isLogin ? (
        <div className="form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email ID</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
          <p>
            New user?{' '}
            <span onClick={toggleForm} className="toggle-link">Register</span>
          </p>
        </div>
      ) : (
        <div className="form">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <div className="input-box">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
              <label>Username</label>
            </div>
            <div className="input-box">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <label>Phone Number</label>
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <label>Email ID</label>
            </div>
            <div className="input-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <label>Password</label>
            </div>
            <div className="input-box">
              <input
                type="text"
                name="exam"
                value={formData.exam}
                onChange={handleInputChange}
                required
              />
              <label>Exam Chosen</label>
            </div>
            <button type="submit" className="btn">Register</button>
          </form>
          <p>
            Already registered?{' '}
            <span onClick={toggleForm} className="toggle-link">Login</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;

