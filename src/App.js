
import React from "react";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link, Switch } from 'react-router-dom'

import Home from "./Components/home";
import Form from "./Components/Form";

const initialFormValues = {
  person: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  special: "",
}

// const initialDisabled = true;

// const initialFormErrors = {
//   person: '',
//   size: '',
// }


function App() {
  // const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues);
  // const [disabled, setDisabled] = useState(initialDisabled)


  const inputChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value
    }
    );
  }

  // const submit = (evt) => {
  //   evt.preventDefault()
  //   const newCustomer = {
  //     personName: formValues.person.trim(),
  //     pizzaSize: formValues.size.trim()
  //   }

  // }


  return (
    <div className="container">
      <nav className="navbar">

        <h1 className="title">Lambda Eats</h1>
        <div className='nav-links'>
          <Link to="/">Home</Link>
          <span> </span>
          <Link to="/pizza">Order A pizza!</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza">
          <Form
            values={formValues}
            change={inputChange}
            submit={submit}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;

