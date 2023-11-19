import { useState } from "react";
import './App.css';



function App() {

  // const [email, setEmail] = useState('');
  // const [pass, setPass] = useState('');
  // const [username, setUsername] = useState('');
  // const [select, setSelect] = useState('');
  // const [check, setCheck] = useState(false);

  // let a = "password";
  // let obj = {
  //   [a]: "John",
  // };
  // console.log(obj);

  const [inputs, setInputs] = useState({
    // email: '',
    // password: '',
    // username: '',
    // select: '',
    // check: false
  });

  const handleInputs = (e) => {
    const value = e.target.type === "checkbox"? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputs({ ...inputs, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log('email=>', email);
    // console.log('password=>', pass);
    // console.log('username=>', username);
    // console.log('select=>', select);
    // console.log('check=>', check);

    console.log('inputs=>', inputs);

  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          {/* Email: <input type="email" onChange={(e) => setEmail(e.target.value)}/> */}
          Email: <input name="email" type="email" onChange={(e) => handleInputs(e)} />
          <br />
          {/* Password: <input type="password" onChange={(e) => setPass(e.target.value)} /> */}
          Password: <input name="password" type="password" onChange={(e) => handleInputs(e)} />
          <br />
          {/* Username: <input type="text" onChange={(e) => setUsername(e.target.value)}/> */}
          Username: <input name="username" type="text" onChange={(e) => handleInputs(e)} />
          <br />
          {/* <select onChange={(e)=> setSelect(e.target.value)}> */}
          <select onChange={(e) => handleInputs(e)} name = "select">
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <br />
          {/* <input type = "checkbox" onChange={(e)=> setCheck(e.target.checked)}/> */}
          <input type="checkbox" onChange={(e) => handleInputs(e)} name="check"/>
          <br />
          <input type='submit' value='Submit' />
        </form>
      </header>
    </div>
  );
}

export default App;
