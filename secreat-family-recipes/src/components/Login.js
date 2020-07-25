import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
  /* display: flex; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  .error-message{ 
    margin: 1rem;
  }
`

export default function Login({ loginFormValues, handleChange, onSubmit, loginErrorMessages }) {


  return (
    <Styles>
      <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
          <Grid.Column>
            <Form onSubmit={onSubmit}>
              <Form.Input
                name='username'
                value={loginFormValues.username}
                onChange={handleChange}
                icon='user'
                iconPosition='left'
                label='Username'
                placeholder='Username'
              />
              <div className='error-message'>
                <p>
                  {loginErrorMessages.username}
                </p>
              </div>
              <Form.Input
                name='password'
                value={loginFormValues.password}
                onChange={handleChange}
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
              />
              <div className='error-message'>
                <p>
                  {loginErrorMessages.password}
                </p>
              </div>

              <Button content='Login' primary />
            </Form>
          </Grid.Column>

          <Grid.Column verticalAlign='middle'>
            <Link to='/singup'>
              <Button content='Sign up' icon='signup' size='big' />
            </Link>
          </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
      </Segment>
    </Styles>
  )
}

