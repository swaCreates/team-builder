import React, {useState} from 'react';
import './App.scss';
import Form from './components/Form/Form';
import Member from './components/Members/Member';

function App() {

  const [members, setMembers]= useState([
    {
      name: 'Fran',
      role: 'Software Engineer (Developer of this app)',
      school: 'Lambda',
    }
  ])

  const addNewMember= member =>{
    const newMember= setMembers([...members, member]);
  };

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Member members={members}/>
    </div>
  );
}

export default App;
