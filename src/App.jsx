import logo from './logo.svg';
import './App.css';
import Student from './components/Student/Student';
import { studentData } from './students';
import { useState } from 'react';

function App() {

  const [students, setStudents] = useState(studentData)

  return (
    <div className="App">
      {students.map(student=>
        <Student student={student}></Student>
      )}
    </div>
  );
}

export default App;
