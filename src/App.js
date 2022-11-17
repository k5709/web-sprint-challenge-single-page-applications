// import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link, Switch } from 'react-router-dom'

import Form from "./Components/Form";

const initialFormValues = {
  person: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  special: ''
}
// const initialFormErrors = {
//   person: '',
//   size: '',
//   pepperoni: '',
//   sausage: '',
//   mushrooms: '',
//   peppers: '',
//   special: ''
// }


const App = () => {
  // const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="title">Lambda Eats</h1>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order A pizza!</Link>
      </nav>

      <Switch>
        <Route path="/pizza">
          <Form values={formValues} />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
