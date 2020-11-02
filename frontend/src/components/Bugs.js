import React, { useState } from 'react';

function Bug({ bug, index, completeBug, deleteBug}) {
  return(
    <div style={{textDecoration: bug.isCompleted ? 'line-through' : ''}} 
    className="bug">
    { bug.text }
      <div>
        <button onClick={() => completeBug(index)}>Complete</button>
        <button onClick={() => deleteBug(index)}>X</button>
      </div>
    </div>
  )
}


function BugForm({ addBug }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addBug(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      className="input" 
      placeholder="Add Bug..."
      value={value} 
      onChange={e => setValue(e.target.value)} />
    </form>
  )
}


function Bugs() { 

  const [bugs, setBugs] = useState([
    {
      text: 'Do mobile update on projects',
      isCompleted: false
    },
    {
      text: 'Work on login for blog',
      isCompleted: false
    },
    {
      text: 'Connect to the backend with Django',
      isCompleted: false
    }
  ]);
  const addBug = text => {
    const newBugs = [...bugs, { text }];
    setBugs(newBugs);
  };

  const completeBug = index => {
    const newBugs = [...bugs];
    newBugs[index].isCompleted = true;
    setBugs(newBugs);
  };

  const deleteBug = index => {
    const newBugs = [...bugs];
    newBugs.splice(index, 1);
    setBugs(newBugs);
  };
    return(<>
      <div >
        <h1>Bugs Component</h1>
      </div>
      <div className="app">
      <div className="bug-list">
        {bugs.map((bug, index) => (
          <Bug
          key={index} 
          index={index} 
          bug={bug} 
          completeBug={completeBug}
          deleteBug={deleteBug}
          />
          ))}
        
        <BugForm addBug={addBug} />
      </div>
    </div>
    </>
  )
}


export default Bugs;