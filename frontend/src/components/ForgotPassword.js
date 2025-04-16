import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EnvelopeFill } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [previewLink, setPreviewLink] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setPreviewLink('');

    try {
      const response = await axios.post('http://localhost:5000/forgot-password', { email });

      if (response.data.previewURL) {
        setPreviewLink(response.data.previewURL);
        setMessage('✅ Password reset link has been sent!');
      } else {
        setMessage('Email sent, but no preview link was returned.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <motion.div
      className="container mt-5"
      style={{ maxWidth: '400px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="mb-4 d-flex align-items-center gap-2">
        <EnvelopeFill size={24} /> Forgot Password
      </h2>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Send Reset Link
        </button>
      </form>

      {previewLink && (
        <p className="mt-3">
          Preview email:{' '}
          <a href={previewLink} target="_blank" rel="noopener noreferrer">
            {previewLink}
          </a>
        </p>
      )}
    </motion.div>
  );
};

export default ForgotPassword;