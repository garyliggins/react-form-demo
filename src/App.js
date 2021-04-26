import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import FormResults from './components/FormResults'
import './App.css';

function App() {

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [password,setPassword] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="App">
      <Header/>
      <Form setFirstName={setFirstName} setLastName={setLastName} setEmail={setEmail} setPassword={setPassword}/>
      <FormResults firstName={firstName} lastName={lastName} email={email} password={password}/>
      <Footer/>
    </div>
  );
}

export default App;
