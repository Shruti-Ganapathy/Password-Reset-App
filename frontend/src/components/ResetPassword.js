import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { KeyFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.post('http://localhost:5000/verify-token', { token });
        if (res.data.message === 'Token valid') setIsValid(true);
      } catch {
        setMessage('Invalid or expired token');
      }
    };
    verifyToken();
  }, [token]);

  const handleReset = async (e) => {
    e.preventDefault();
    if (password.length < 6) return setMessage('Password must be at least 6 characters');
    if (password !== confirmPassword) return setMessage("Passwords don't match");
    try {
      const res = await axios.post('http://localhost:5000/reset-password', { token, newPassword: password });
      setMessage(res.data.message);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error resetting password');
    }
  };

  return (
    <motion.div className="container mt-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}>
      <h2 className="mb-4"><KeyFill className="me-2"/>Reset Password</h2>
      {!isValid ? (
        <div className="alert alert-danger">{message}</div>
      ) : (
        <form onSubmit={handleReset} className="shadow p-4 rounded bg-light">
          <div className="form-group mb-3">
            <label>New Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <div className="form-group mb-3">
            <label>Confirm Password</label>
            <input type="password" className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-success">Reset Password</button>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </form>
      )}
    </motion.div>
  );
}

export default ResetPassword;