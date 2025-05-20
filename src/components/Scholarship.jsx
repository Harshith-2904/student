import { useState } from 'react';
import { Link } from 'react-router-dom';

function Scholarship() {
  const [formData, setFormData] = useState({
    scholarshipType: '',
    reason: '',
    financialNeed: '',
    achievements: '',
    documents: null,
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      // Here you would typically make an API call to your backend
      // For demo purposes, we'll just simulate a successful submission
      if (Object.values(formData).every(value => value)) {
        setSuccess('Scholarship application submitted successfully!');
        setFormData({
          scholarshipType: '',
          reason: '',
          financialNeed: '',
          achievements: '',
          documents: null,
        });
      } else {
        setError('Please fill in all fields');
      }
    } catch (err) {
      setError('Failed to submit scholarship application');
    }
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-container">
          <h2>Scholarship Application</h2>
          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/student-details">Student Details</Link>
            <Link to="/payment">Payment</Link>
            <Link to="/login">Logout</Link>
          </div>
        </div>
      </div>

      <div className="form-container" style={{ marginTop: '20px' }}>
        <h3>Apply for Scholarship</h3>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="scholarshipType">Scholarship Type</label>
            <select
              id="scholarshipType"
              name="scholarshipType"
              value={formData.scholarshipType}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px' }}
            >
              <option value="">Select Scholarship Type</option>
              <option value="merit">Merit-based Scholarship</option>
              <option value="need">Need-based Scholarship</option>
              <option value="sports">Sports Scholarship</option>
              <option value="research">Research Scholarship</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="reason">Why do you deserve this scholarship?</label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '100px' }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="financialNeed">Financial Need Statement</label>
            <textarea
              id="financialNeed"
              name="financialNeed"
              value={formData.financialNeed}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '100px' }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="achievements">Academic and Extracurricular Achievements</label>
            <textarea
              id="achievements"
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', minHeight: '100px' }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="documents">Supporting Documents (PDF only)</label>
            <input
              type="file"
              id="documents"
              name="documents"
              onChange={handleChange}
              accept=".pdf"
              required
              style={{ width: '100%', padding: '8px 0' }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}

export default Scholarship; 