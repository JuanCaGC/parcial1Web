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

  const handleLogin = () => {
    const isEmailValidated = isEmailValid(formValues.email);
    const isPasswordValidated = isPasswordValid(formValues.password); 
    if(isEmailValidated && isPasswordValidated)
    {
      navigate('/cafeTable');
    }
    setValidationStates({ ...validationStates, emailState: false });
    setValidationStates({ ...validationStates, passwordState: false });
  };


  const isEmailValid = (email) => {
    return true;
  };

  const isPasswordValid = (password) => {
    return password.length >= 6;
  };
 
  return (
    <div className="login">
      <h1>El aroma magico</h1>
      <div>
        <img src="http://dummyimage.com/300x200.png/dddddd/000000"/>
        </div>
        <p>Inicio de sesion</p>
        <div>
        <Form>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email}/>
          </Form.Group>
 
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contrasena</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
          </Form.Group>
          <Button variant="primary" onClick={handleLogin}>
            Ingresar
          </Button>
          <Button variant="primary" >
            Cancelar
          </Button>
          { (!validationStates.passwordState || !validationStates.emailState) && <Form.Text className="text-muted">Error autenticacion. Revise sus credenciales</Form.Text>}
        </Form>
        </div>
    </div>
  );
}

export default Login;
