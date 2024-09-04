
import './App.css';

const user = {
  firstName: 'Hong',
  lastName: 'GilDong'
}

const Student = (user) => {
  return user.firstName + " " + user.lastName;
}

function App() {
  
  const isStudent = true;

  return (
    <div className="App">
      <h1>The Joeun React 2024</h1>
      <h3>component practice</h3>
      {isStudent ? 
        (<p>{Student(user)} is student!</p>) :
        (<p>{Student(user)} is not student!</p>)
      }
      {isStudent && (<p>{Student(user)} is student!</p>) || (<p>{Student(user)} is not student!</p>)}

      <Com1></Com1>
      <Com1></Com1>
      <Com1></Com1>
      <Com1></Com1>
    </div>
  );
}

const Com1 = () => {
  return (
    <>
      <h1>com1 component!</h1>
      <ul>try this
        <li>li 1</li>
        <li>li 2</li>
        <li>li 3</li>
        <li>li 4</li>
        <li>li 5</li>
      </ul>
    </>
  )
}

export default App;
