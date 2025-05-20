import { Link } from 'react-router-dom';

function Dashboard() {
  // Mock data - in a real application, this would come from an API
  const studentData = {
    name: 'John Doe',
    studentId: 'STU123456',
    department: 'Computer Science',
    cgpa: 3.8,
    semester: 'Fall 2024',
    courses: [
      { id: 1, name: 'Data Structures', grade: 'A' },
      { id: 2, name: 'Algorithms', grade: 'A-' },
      { id: 3, name: 'Database Systems', grade: 'B+' },
    ],
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-container">
          <h2>Student Dashboard</h2>
          <div className="nav-links">
            <Link to="/student-details">Student Details</Link>
            <Link to="/scholarship">Scholarship</Link>
            <Link to="/payment">Payment</Link>
            <Link to="/login">Logout</Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div className="card">
          <h3>Welcome, {studentData.name}</h3>
          <p>Student ID: {studentData.studentId}</p>
          <p>Department: {studentData.department}</p>
          <p>Current CGPA: {studentData.cgpa}</p>
          <p>Current Semester: {studentData.semester}</p>
        </div>

        <div className="card">
          <h3>Current Courses</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <th style={{ textAlign: 'left', padding: '8px' }}>Course</th>
                <th style={{ textAlign: 'left', padding: '8px' }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {studentData.courses.map((course) => (
                <tr key={course.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '8px' }}>{course.name}</td>
                  <td style={{ padding: '8px' }}>{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <h3>Quick Actions</h3>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <Link to="/scholarship" className="btn btn-primary">
              Apply for Scholarship
            </Link>
            <Link to="/payment" className="btn btn-primary">
              Make Payment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 