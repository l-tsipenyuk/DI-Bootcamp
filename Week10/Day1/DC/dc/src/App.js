import { useState } from "react";
import './App.css';

function App() {

  const [inputs, setInputs] = useState({
  });
  const [nutText, setNutText] = useState("");
  const [lactoseText, setLactoseText] = useState("");
  const [veganText, setVeganText] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputs = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }))

    if (name === "nutsFree") {
      setNutText(value ? "**Nuts Free: Yes" : "**Nuts Free: No");
    } else if (name === "lactoseFree") {
      setLactoseText(value ? "**Lactose Free: Yes" : "**Lactose Free: No");
    } else if (name === "vegan") {
      setVeganText(value ? "**Vegan Meal: Yes" : "**Vegan Meal: No");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('inputs=>', inputs);
    const dataToSubmit = {
      fname: inputs.fname,
      lname: inputs.lname,
      age: inputs.age,
      gender: inputs.gender,
      select: inputs.select,
      dietaryRestrictions: {
        nutsFree: nutText,
        lactoseFree: lactoseText,
        vegan: veganText,
      },
    };
    setSubmittedData(dataToSubmit);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <h1 id="header">Sample Form</h1>
          <form onSubmit={handleSubmit}>

            <input className="box" name="fname" placeholder="First Name" type="text" onChange={(e) => handleInputs(e)} />
            <br />
            <input className="box" name="lname" placeholder="Last Name" type="text" onChange={(e) => handleInputs(e)} />
            <br />
            <input className="box" name="age" placeholder="Age" type="text" onChange={(e) => handleInputs(e)} />
            <br />

            <p>Gender:</p>
            <input type="radio" id="Male" name="gender" value="Male" checked={inputs.gender === "Male"} onChange={(e) => handleInputs(e)} />
            <label htmlFor="Male">Male</label>
            <br />
            <input type="radio" id="Female" name="gender" value="Female" checked={inputs.gender === "Female"} onChange={(e) => handleInputs(e)} />
            <label htmlFor="Female">Female</label>

            <p>Select your destination</p>
            <select onChange={(e) => handleInputs(e)} name="select">
              <option value="1" >--Please Choose a destination--</option>
              <option value="Thailand">Thailand</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
            </select>
            <br />

            <p>Dietary restrictions</p>
            <h2>
              <input type="checkbox" onChange={(e) => handleInputs(e)} name="nutsFree" />
              Nuts Free</h2>
            <h2>
              <input type="checkbox" onChange={(e) => handleInputs(e)} name="lactoseFree" />
              Lactose Free</h2>
            <h2>
              <input type="checkbox" onChange={(e) => handleInputs(e)} name="vegan" />
              Vegan</h2>
            <input type='submit' value='Submit' id ="submit" />
          </form>
        </div>

        <div className="infoSubmitted">
          <hr></hr>
          <h1 id="entered">Entered information:</h1>
          {submittedData &&
            <>
              <p className="enteredInfo">Your name: {inputs.fname} {inputs.lname}</p>
              <p className="enteredInfo">Your age: {inputs.age}</p>
              <p className="enteredInfo">Your gender: {inputs.gender}</p>
              <p className="enteredInfo">Your destination: {inputs.select}</p>
              <p className="enteredInfo">Your dietary restrictions:</p>


              <p className="enteredInfoDietary">{nutText}</p>
              <p className="enteredInfoDietary">{lactoseText}</p>
              <p className="enteredInfoDietary">{veganText}</p>
            </>
          }
        </div>
      </header>
    </div >
  );
}

export default App;