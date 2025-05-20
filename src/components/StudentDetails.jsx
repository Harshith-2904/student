import { useState } from 'react';
import { Link } from 'react-router-dom';

function StudentDetails() {
  // Mock data - in a real application, this would come from an API
  const [studentDetails] = useState({
    personalInfo: {
      name: 'John Doe',
      studentId: 'STU123456',
      email: 'john.doe@university.edu',
      phone: '+1 234 567 8900',
      address: '123 University Ave, City, State 12345',
      dateOfBirth: '2000-01-01',
    },
    academicInfo: {
      department: 'Computer Science',
      program: 'Bachelor of Science',
      enrollmentDate: '2020-09-01',
      expectedGraduation: '2024-05-15',
      currentSemester: 'Fall 2024',
      cgpa: 3.8,
    },
    academicHistory: [
      {
        semester: 'Spring 2024',
        courses: [
          { name: 'Data Structures', credits: 3, grade: 'A' },
          { name: 'Algorithms', credits: 3, grade: 'A-' },
          { name: 'Database Systems', credits: 3, grade: 'B+' },
        ],
      },
      {
        semester: 'Fall 2023',
        courses: [
          { name: 'Operating Systems', credits: 3, grade: 'A' },
          { name: 'Computer Networks', credits: 3, grade: 'A' },
          { name: 'Software Engineering', credits: 3, grade: 'B+' },
        ],
      },
    ],
  });

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-container">
          <h2>Student Details</h2>
          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/scholarship">Scholarship</Link>
            <Link to="/payment">Payment</Link>
            <Link to="/login">Logout</Link>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <div className="card">
          <h3>Personal Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <p><strong>Name:</strong> {studentDetails.personalInfo.name}</p>
            <p><strong>Student ID:</strong> {studentDetails.personalInfo.studentId}</p>
            <p><strong>Email:</strong> {studentDetails.personalInfo.email}</p>
            <p><strong>Phone:</strong> {studentDetails.personalInfo.phone}</p>
            <p><strong>Address:</strong> {studentDetails.personalInfo.address}</p>
            <p><strong>Date of Birth:</strong> {studentDetails.personalInfo.dateOfBirth}</p>
          </div>
        </div>

        <div className="card">
          <h3>Academic Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <p><strong>Department:</strong> {studentDetails.academicInfo.department}</p>
            <p><strong>Program:</strong> {studentDetails.academicInfo.program}</p>
            <p><strong>Enrollment Date:</strong> {studentDetails.academicInfo.enrollmentDate}</p>
            <p><strong>Expected Graduation:</strong> {studentDetails.academicInfo.expectedGraduation}</p>
            <p><strong>Current Semester:</strong> {studentDetails.academicInfo.currentSemester}</p>
            <p><strong>CGPA:</strong> {studentDetails.academicInfo.cgpa}</p>
          </div>
        </div>

        <div className="card">
          <h3>Academic History</h3>
          {studentDetails.academicHistory.map((semester, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h4>{semester.semester}</h4>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Course</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Credits</th>
                    <th style={{ textAlign: 'left', padding: '8px' }}>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {semester.courses.map((course, courseIndex) => (
                    <tr key={courseIndex} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '8px' }}>{course.name}</td>
                      <td style={{ padding: '8px' }}>{course.credits}</td>
                      <td style={{ padding: '8px' }}>{course.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StudentDetails; 