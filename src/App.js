import React, {useState,useEffect} from "react";
import { Route,Link,Switch,Redirect} from "react-router-dom";
import Home from './Home.js'
import axios from 'axios'
import Form from './Form.js'
import schema from './formSchema.js'
import { validate } from "@babel/types";
//Initial Values
const iniFormValues ={
name: '',
//Dropdown
size: '',
sauce: '',
topping1: false,
topping2: false,
special: ''
}
 const iniFormErrors = {
   name: '',
   size: '',
 }

 const iniOrder = []
 const iniDisabled = true

const App = () => {
  //STATES
  const [orders, setOrder] = useState(iniOrder) //arr
  const [formValues, setFormValues] = useState(iniFormValues) //obj
  const [formErrors,setFormErrors] = useState(iniFormErrors) //obj
  const [disabled, setDisabled] = useState(iniDisabled) //boolean

  //HELPERS
 const getOrder = () => {
   axios.get('https://reqres.in/api/orders')
   .then(res => {
      console.log(res.data)
     setOrder(res.data)
   })
   .catch(err => {
     console.log(err)
   })
 }

 const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
  .then(res => {
    setOrder([res.data,...orders])
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    setFormValues(iniFormValues)
  })
 }

 const inputChange = (name, value) => {
   validate(name,value)
   setFormValues({
     ...formValues,[name]:value
   })
 }

 const formSubmit = () => {
 const newOrder = {
   name: formValues.name.trim(),
   size: formValues.size.trim(),
  topping1: formValues.topping1.trim(),
  topping2: formValues.topping2.trim(),
  special: formValues.special.trim(),
 }
 }

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to ='/'>Home</Link>
      <Switch>
        <Route path='/pizza'>
          <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
          />
        </Route>
      <Route path='/'>
        <Home/>
      </Route>
      </Switch>
    </>

    
  );
};
export default App;
