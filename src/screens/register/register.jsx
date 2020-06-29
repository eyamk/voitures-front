/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import { Formik } from 'formik';
import { isEmpty, omit, get } from 'lodash';
import Router from 'next/router';
import * as Yup from 'yup';
import RegisterWrapper from './registerWrapper';
import REGISTER from '../../graphql/mutations/createUser.graphql';
import GET_AGENCES from '../../graphql/queries/getAgences.graphql';
import Chip from './chip';

// const AgenceItem = ({ item }) => <div>{item.nomAgence}</div>;

const initialValues = {
  nom: '',
  prenom: '',
  username: '',
  email: '',
  photo: '',
  password: '',
  confirmpassword: '',
  agence: '',
};
// const { agence } = initialValues;

const validationSchema = Yup.object().shape({
  nom: Yup.string().required(`⚠️ Veuillez saisir votre nom`),
  prenom: Yup.string().required(`⚠️ Veuillez saisir votre prenom`),
  usename: Yup.string().required(`⚠️ Veuillez saisir votre username`),
  email: Yup.string().email('Invalid email').required('⚠️Veuillez saisir votre email'),
  photo: Yup.string().required(`⚠️ Veuillez saisir votre photo`),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  confirmpassword: Yup.string().required(`⚠️ Veuillez saisir la confirmation de votre mot de passe`),
});

const register = () => {
  const [ visible, setVisible ] = useState(false);
  const [ createUser ] = useMutation(REGISTER);
  const [ error, setError ] = useState(null);

  const { loading, data } = useQuery(GET_AGENCES, {
    refetchQueries: [ { query: GET_AGENCES } ],
  });
  if (loading) return <p>Loading ...</p>;

  const agences = get(data, 'getAgences');

  const handleRegister = async (e, values) => {
    e.preventDefault();
    if (
      isEmpty(values.nom) &&
			isEmpty(values.prenom) &&
			isEmpty(values.username) &&
			isEmpty(values.email) &&
			isEmpty(values.photo) &&
			isEmpty(values.password) &&
			isEmpty(values.confirmpassword)
    )
      return setError('⚠️ Merci de saisir vos coordonnées.');
    await createUser({
      variables: {
        input: {
          nom: values.nom,
          prenom: values.prenom,
          username: values.username,
          email: values.email,
          photo: values.photo,
          password: values.password,
          confirmpassword: values.confirmpassword,
          
        },
      },
    });
		
    return Router.push('/home');
  };

  return (
    <RegisterWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        initialTouched={{
          nom: false,
          prenom: false,
          username: false,
          email: false,
          photo: false,
          password: false,
          cofirmpassword: false,
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <div className='disable'>
            <div className='part1'>
              <img className='background-image1' src='static/Login.png' />
              <img className='image1' src='static/bus.png'/>
            </div>
            <div className="registerInput part2">
              <form onSubmit={(e) => handleRegister(e, values)}>
                <img className='background-image' src='static/login Icon.png'/>
                <img className='image' src='static/Tracé 594.png'/>
                <div>
                  <input
                    type="text"
                    placeholder="Nom"
                    name="nom"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nom}
                  />
                </div>
                {errors.nom && touched.nom && <small className="connection__error"> {errors.nom} </small>}

                <div>
                  <input
                    type="text"
                    placeholder="Prénom"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="prenom"
                    value={values.prenom}
                  />
                </div>
                {errors.prenom &&
							touched.prenom && <small className="connection__error"> {errors.prenom} </small>}

                <div>
                  <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="username"
                    value={values.username}
                  />
                </div>
                {errors.username &&
							// eslint-disable-next-line max-len
							touched.username && <small className="connection__error"> {errors.username} </small>}

                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                  />
                </div>
                {errors.email && touched.email ? (
                  <small className="connection__error">{errors.email}</small>
                ) : null}
                <div>
                  <input
                    type={visible ? 'text' : 'password'}
                    placeholder="Mot de passe"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                    value={values.password}
                  />
                </div>
                {errors.password &&
							touched.password && <small className="connection__error"> {errors.password} </small>}

                <div>
                  <input
                    type={visible ? 'text' : 'password'}
                    placeholder="Confirmation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="confirmpassword"
                    value={values.confirmpassword}
                  />
                </div>
                {errors.confirmpassword &&
							touched.confirmpassword && (
                  <small className="connection__error">{errors.confirmpassword} </small>
                )}

                <div className="upload_photo">
                  {/* <label class="custom-file-upload"> */}
                  <input
                    accept="image/*"
                    type="file"
                    id="file"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Photo"
                    name="photo"
                    className="photoInput"
                    value={values.photo}
                  />
                  {/* Photo
                  </label> */}
                  {/*  {errors.photo &&
								touched.photo && <small className="connection__error"> {errors.photo} </small>} */}

                  {/* <label for="file">
									upload photo
                   <img src="/static/upload.png" alt="" /> 
                </label> */}
                </div>
                {/* <div className="list-agences">
                  <h4>Agence</h4>
                  <div>
                    <select  >
                      {agences.map((el) => <option  value={el.id}>{el.nomAgence}</option>)}
                    </select>
                  </div>
                </div>  */}

              
                <Chip />
                <div
                  className={
                    values.nom !== '' &&
									values.prenom !== '' &&
									values.username !== '' &&
									values.email !== '' &&
									values.photo !== '' &&
									values.password === values.confirmpassword &&
									values.password.length >= 8 ? (
                        'btn'
                      ) : (
                        'btn-disable'
                      )
                  }
                >
                  <button type="submit" value="upload" className='registerButton'>
									S'enregistrer
                  </button>
                </div>
                {error && <small className="connection__error__msg">{error}</small>}
              </form>
            </div>
          </div>
        )}
      </Formik>
    </RegisterWrapper>
  );
};
export default register;
