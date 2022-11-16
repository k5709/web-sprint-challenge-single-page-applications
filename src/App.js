import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import Form from "./Components/order";

const initialFormValues = {
  customerName: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  special: ''
}


const App = () => {

  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <nav className="navbar">
      <h1 className="title">Lambda Eats</h1>
      {/* <Form /> */}
    </nav>
  );
};
export default App;
