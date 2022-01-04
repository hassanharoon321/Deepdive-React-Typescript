import './App.css';
import { Button } from './Components/Button';
import { Container } from './Components/Container';
import { Greet } from './Components/Greet';
import { Input } from './Components/Input';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import LoggedIn from './Components/State/LoggedIn';
import { Status } from './Components/Status';


function App() {

  const personName = {
    first:"Hassan",
    last:"Haroon"
  }

  const nameList = [
    {
      first:"Hassan",
      last:"Haroon"
    },
    {
      first:"Hello",
      last:"World"
    },
    {
      first:"Something",
      last:"New"
    }
  ]

  return (
    <div className="App">
      <Greet name="Vishwas" isLoggedIn={false}/>
      <Person name={personName}/>
      {/* <PersonList nameList={nameList}/> */}
      <Status status='success'/>
      <Button handleClick={(event,id)=>console.log("Button Clicked",event,id)}/>
      <Input value="" handleChange={(event)=>console.log(event)}/>
      <Container styles={{border:"1px solid black",padding:"1rem"}}/>
      <LoggedIn/>
    </div>
  );
}

export default App;
