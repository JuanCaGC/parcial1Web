import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const [formValues, setFormValues] = useState({email:"", password:""})
  const navigate = useNavigate();

  const [validationStates, setValidationStates] = useState({
    emailState: true,
    passwordState: true,
  });



  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isPasswordValidated = isPasswordValid(newPassword);
    setValidationStates({ ...validationStates, passwordState: isPasswordValidated });
    setFormValues({ ...formValues, password: newPassword });
  };;

  const handleLogin = async () => {
    const isEmailValidated = isEmailValid(formValues.email);
    const isPasswordValidated = isPasswordValid(formValues.password); 

    if (isEmailValidated && isPasswordValidated) {
      try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            login: formValues.email, 
            password: formValues.password,
          }),
        });

        if (response.status === 200) {
          navigate('/cafeTable');
        } else if (response.status === 401) {
          console.error('Credenciales incorrectas');
          setValidationStates({ ...validationStates, emailState: false });
          setValidationStates({ ...validationStates, passwordState: false });
        } else {
          console.error('Error desconocido en la autenticación');
          setValidationStates({ ...validationStates, emailState: false });
          setValidationStates({ ...validationStates, passwordState: false });
        }
      } catch (error) {
        console.error('Error al realizar la solicitud POST', error);
      }
    } else {
      setValidationStates({ ...validationStates, emailState: false });
      setValidationStates({ ...validationStates, passwordState: false });
    }
  };


  const isEmailValid = (email) => {
    return true;
  };

  const isPasswordValid = (password) => {
    return true;
  };
 
  return (
    <div className="login">
      <div className='cajaLogin'></div>
      <div className='frame_arriba'>
        <p className='elAromaMagico'>El aroma magico</p>
        <div className='image1'></div>
      </div>
      <p className='inicioDeSesion'>Inicio de sesion</p>
      <div>
        <Form>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label className="nombreDeUsuario" >Nombre de usuario</Form.Label>
            <Form.Control className='boxNombreUsuario' type="email"  onChange={handleEmailChange} value={formValues.email}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="contrasena">Contrasena</Form.Label>
            <Form.Control className='boxcontrasena' type="password"  onChange={handlePasswordChange} value={formValues.password} />
          </Form.Group>
          <Button className='ingresar' variant="primary" onClick={handleLogin}>
            Ingresar
          </Button>
          <Button className='cancelar' variant="primary" >
            Cancelar
          </Button>
          { (!validationStates.passwordState || !validationStates.emailState) && <Form.Text className="errorDeAutenticacion">Error autenticacion. Revise sus credenciales</Form.Text>}
        </Form>
      </div>
      <p className='contactUs'>
        Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
      </p>
    </div>
  );
}

export default Login;
