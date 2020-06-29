/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Formik } from 'formik';
import { get, isEmpty } from 'lodash';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import LOGIN from '../../graphql/mutations/loginUser.graphql';
import LoginWrapper from './loginWrapper';
import Google from './googleAuth';

const initialValues = {
  email: '',
  password: '',
};
const validationSchema = Yup.object().shape({
  email: Yup.string().required(` Check your username`),
  password: Yup.string().required(` Check your password`),
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Connection = () => {
  const [ visible, setVisible ] = useState(false);
  const [ signin ] = useMutation(LOGIN);
  const [ error, setError ] = useState(null);
  const handleConnexion = async (e, values) => {
    e.preventDefault();
    if (isEmpty(values.email) && isEmpty(values.password))
      return setError(' Incorrect entry');
    const { data } = await signin({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
    });
       
    if (get(data, 'signIn.message') === 'success') return Router.push('/home');
    return setError(' Incorrect email address and / or password.');
  };
  const classes = useStyles();
  return (
    <LoginWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        initialTouched={{ email: false, password: false }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <div className='body'>
            <div className="display">
              <div className="first-division">
                <img className='img1' src='static/Login.png'/>
                <img  className='login-image image1' src='static/Groupe 553.png'/>
                <img className='image2' src='static/voiture.png'/>
                <img className='image3' src='static/bus.png'/> 
                <img className='image4' src='static/car red.png'/>  
              </div>
              <div className="second-division">
                <form className="connection" noValidate autoComplete="off" onSubmit={(e) => handleConnexion(e, values)}>
                  <div className="loginInput">
                  <img className="background-image" src='static/login Icon.png' />
                    <img className='account-image' src="static/Tracé 594.png"/>
                    <div>
                      <div>
                        <TextField
                          className='email' 
                          id="outlined-basic" label="email" variant="outlined" 
                          type="text"
                          placeholder="Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          name="email"
                        />
                      </div>
                      {errors.email &&
 							touched.email && <small className="connection__error"> {errors.email} </small>}
                    </div>
                    <div>
                      <div>
                        <TextField 
                          id="outlined-basic" label="Password" variant="outlined" 
                          placeholder="Password"
                          type={visible ? 'text' : 'password'}
                          className="connection__input-field password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password} 
                        />
                      
                      </div>
                      {errors.password &&	touched.password && <small className="connection__error">
                        {errors.password} </small>}
                    </div>
                    <div> 
                  <button className="loginButton" type="submit" >
									Login
                  </button>
                     
                      {error && <small className="connection_error connection_error_login" > {error} </small>}
                    </div>
                    <div className="link">
              
                      <span >Don't have an account yet ?</span>
                      <h6> 
                        <a href="#" onClick={() => Router.push('/register')}> Create an account  </a>
                      </h6>
			
                    </div>
			  <div>
                      {/* <Google /> */}
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default Connection;
