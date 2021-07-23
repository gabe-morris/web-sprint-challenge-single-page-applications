import React, {useState,useEffect} from "react";
import { Route,Link,Switch} from "react-router-dom";
import Home from './Home.js'
import axios from 'axios'
import Form from './Form.js'
import schema from './formSchema.js'
import { reach } from "yup";
//Initial Values
const iniFormValues ={
name: '',
//Dropdown
size: '',
sauce: false, //radio
//checkboxes
topping1: false,
topping2: false,
topping3: false,
topping4: false,
gluten:false,
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
  const [order, setOrder] = useState(iniOrder) //arr
  const [formValues, setFormValues] = useState(iniFormValues) //obj
  const [formErrors,setFormErrors] = useState(iniFormErrors) //obj
  const [disabled, setDisabled] = useState(iniDisabled) //boolean

  //HELPERS
 const getOrder = () => {
   return(
   axios.get('https://reqres.in/api/orders')
   .then(res => {
      console.log(res.data)
     setOrder(res.data)
   })
   .catch(err => {
     console.log(err)
   })
   )
 }
 const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
   special: formValues.special.trim(),
  }
  postNewOrder(newOrder)
  }

 const postNewOrder = newOrder => {

  axios.post('https://reqres.in/api/orders', newOrder)
  .then(res => {
    setOrder([res.data])
    console.log(order)
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    setFormValues(iniFormValues)
  })
 }
const validate = (name, value) => {
reach(schema,name)
.validate(value)
.then(() => setFormErrors({...formErrors, [name]: ''}))
.catch(err => ({...formErrors, [name]: err.errors[0]}))
}
 const inputChange = (name, value) => {
   validate(name,value)
   setFormValues({
     ...formValues,
     [name]: value
   })
 }



 useEffect(() => {
  getOrder()
 },[])

 useEffect(() => {
   schema.isValid(formValues).then(valid => setDisabled(!valid))
 },[formValues])
  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
      <Link to ='/'>Home</Link>
      </nav>
      <div>
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
      </div>
    </>

    
  );
};
export default App;
