import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import * as yup from 'yup'
//components
import Login from './components/Login'
import loginSchema from './validation/loginSchema'

//Login initial values and errors
const initialLoginValues = {
  username: '',
  password: '',
}
const defaultLoginErrorMessages = {
  username: '',
  password: '',
}

function App() {
  //form values states
  const [loginFormValues, setLoginFormValues] = useState(initialLoginValues)
  const [loginErrorMessages, setLoginErrorMessages] = useState(defaultLoginErrorMessages)

  //event handlers
  const handleChange = e => {
    //update form values state to the current inputed values
    e.persist()
    const { name, checked, value } = e.target
    e.target.type === 'checkbox'
      ? setLoginFormValues({ ...loginFormValues, [name]: checked })
      : setLoginFormValues({ ...loginFormValues, [name]: value })

    yup
      //get schema that is store in another file, and find the key that matches name
      .reach(loginSchema, name)
      //make sure that the value matches all the conditions of the key
      .validate(value)
      //if all conditions matches then don't display any errors
      .then(() => {
        setLoginErrorMessages({ ...loginErrorMessages, [name]: '' })
      })
      //if there is some conditions that don't match then save the errors to state loginErrorMessages
      .catch(err => {
        setLoginErrorMessages({ ...loginErrorMessages, [name]: err.errors[0] })
      })
  }
  const onSubmit = e => {
    e.preventDefault()
    const logginInData = {
      username: loginFormValues.username,
      password: loginFormValues.password,
    }
    //reset login form
    setLoginFormValues(initialLoginValues)

    //this data needs be check with the back-end
  }

  return (
    <div className="App">
      Hello World

      <Switch>
        <Route path='/login'>
          <Login
            loginFormValues={loginFormValues}
            handleChange={handleChange}
            onSubmit={onSubmit}
            loginErrorMessages={loginErrorMessages}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
