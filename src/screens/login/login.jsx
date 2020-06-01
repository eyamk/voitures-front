import React, { useState } from 'react';
import { Formik } from 'formik';
import { get, isEmpty } from 'lodash';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import Router from 'next/router';
import LOGIN from '../../graphql/mutations/loginUser.graphql';
import LoginWrapper from './loginWrapper';
import Google from './googleAuth';

const initialValues = {
  email: '',
  password: '',
};
const validationSchema = Yup.object().shape({
  email: Yup.string().required(`⚠️ Veuillez saisir votre identifiant`),
  password: Yup.string().required(`⚠️ Veuillez saisir votre mot de passe`),
});
const Connection = () => {
  const [ visible, setVisible ] = useState(false);
  const [ signin ] = useMutation(LOGIN);
  const [ error, setError ] = useState(null);
  const handleConnexion = async (e, values) => {
    e.preventDefault();
    if (isEmpty(values.email) && isEmpty(values.password))
      return setError('⚠️ Merci de saisir votre identifiant et mot de passe correspondant.');
    const { data } = await signin({
      variables: {
        input: {
          email: values.email,
          password: values.password,
        },
      },
    });
       
    if (get(data, 'signIn.message') === 'success') return Router.push('/home');
    return setError('⚠️ Adresse e-mail et/ou mot de passe incorrects.');
  };
  return (
    <LoginWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        initialTouched={{ email: false, password: false }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <form className="connection" onSubmit={(e) => handleConnexion(e, values)}>
            <div className="loginInput">
              <div>
                <div>
                  <input
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
                <input
                  placeholder="Mot de passe"
                  type={visible ? 'text' : 'password'}
                  className="connection__input-field"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password &&	touched.password && <small className="connection__error">
                  {errors.password} </small>}
              </div>
              <div className="btn">
                <button className="loginButton" type="submit" >
									Login
                </button>
              </div>
              {error && <small className="connection_error">{error}</small>}
              <div className="password-link">
                <h6>
                  <a href="#password"> Mot de passe oublié ? </a>
                </h6>
			
              </div>
			  <div>
				<Google />
				</div>

            </div>
          </form>
        )}
      </Formik>
    </LoginWrapper>
  );
};

export default Connection;
