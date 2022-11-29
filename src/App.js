
import React from "react";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link, Switch } from 'react-router-dom'

//components
import Home from "./Components/home";
import Form from "./Components/Form";
import Confirmation from "./Components/Confirmation"

//validation/schema
import Schema from "./Components/Validation/Schema";
import * as yup from 'yup'

const initialFormValues = {
  person: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  special: "",
}

const initialDisabled = true;

const initialFormErrors = {
  person: '',
  size: '',
  special: ''
}


function App() {
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [confirmation, setConfirmation] = useState(initialDisabled)
  const [disabled, setDisabled] = useState(initialDisabled)

  const setNewOrder = (newOrder) => {
    setConfirmation(newOrder)
    setFormValues(initialFormValues)
  }

  const validate = (name, value) => {
    yup.reach(Schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...setFormValues, [name]: value })
  }

  const formSubmit = (evt) => {
    const newOrder = {
      personName: formValues.person,
      pizzaSize: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      peppers: formValues.peppers
    };
    setNewOrder(newOrder)
  }


  // useEffect(() => {
  //   Schema.isValid(formValues).then(valid => setDisabled(!valid))
  // }, formValues)

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
            change={handleChange}
            errors={formErrors}
            disabled="true"
            submit={formSubmit}
          />
        </Route>
        <Route path='/order/confirmation'>
          {/* <Confirmation /> */}
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

