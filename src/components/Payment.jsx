import { useState } from 'react';
import { Link } from 'react-router-dom';

function Payment() {
  const [formData, setFormData] = useState({
    paymentType: '',
    amount: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Mock payment history
  const [paymentHistory] = useState([
    {
      id: 1,
      date: '2024-03-15',
      type: 'Tuition Fee',
      amount: 5000,
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-02-15',
      type: 'Library Fine',
      amount: 50,
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-01-15',
      type: 'Tuition Fee',
      amount: 5000,
      status: 'Completed',
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Here you would typically make an API call to your backend
      // For demo purposes, we'll just simulate a successful payment
      if (Object.values(formData).every(value => value)) {
        setSuccess('Payment processed successfully!');
        setFormData({
          paymentType: '',
          amount: '',
          cardNumber: '',
          cardName: '',
          expiryDate: '',
          cvv: '',
        });
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Payment failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-container">
          <h2>Payment Portal</h2>
          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/student-details">Student Details</Link>
            <Link to="/scholarship">Scholarship</Link>
            <Link to="/login">Logout</Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div className="card">
          <h3>Make a Payment</h3>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="paymentType">Payment Type</label>
              <select
                id="paymentType"
                name="paymentType"
                value={formData.paymentType}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
              >
                <option value="">Select Payment Type</option>
                <option value="tuition">Tuition Fee</option>
                <option value="library">Library Fine</option>
                <option value="hostel">Hostel Fee</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount ($)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                maxLength="16"
                placeholder="1234 5678 9012 3456"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cardName">Cardholder Name</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                  type="text"
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  required
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>

              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  required
                  maxLength="3"
                  placeholder="123"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Make Payment
            </button>
          </form>
        </div>

        <div className="card">
          <h3>Payment History</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Date</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Type</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Amount</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '8px' }}>{payment.date}</td>
                  <td style={{ padding: '8px' }}>{payment.type}</td>
                  <td style={{ padding: '8px' }}>${payment.amount}</td>
                  <td style={{ padding: '8px' }}>{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Payment; 