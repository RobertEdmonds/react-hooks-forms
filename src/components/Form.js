import React,{useState} from "react";


function Form({
  firstName,
  lastName,
  newsletter,
  handleFirstNameChange,
  handleLastNameChange,
  handleNewsletterChange,
}) {
  const [number, setNumber] = useState(0);
  const [error, setError]= useState(null);

  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
      setError(null)
    }else{
      setError(`${newNumber} is not a valid number!`)
    }
  }
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} placeholder="First Name"/>
      <input type="text" onChange={handleLastNameChange} value={lastName} placeholder="Last Name"/>
      <input type="checkbox" id="newsletter" onChange={handleNewsletterChange} checked={newsletter} />
      <input type="number" value={number} onChange={handleNumberChange} />
      {error ? <span style={{ color: "red" }}>{error}</span> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
