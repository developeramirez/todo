import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Login from './Login';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        if(!name || !email || !password || !phone){
            setFlag(true);
        }else{
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log(' Se ha almacenado exitosamente !!');
            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }
    
  return (
    <div className='container p-4'>
        {login ? (
            <form onSubmit={handleSubmit}>
                <h3>Registro de Usuario</h3>
                <div className='form-group'>
                    <label className='form-label'>Nombre Completo</label>
                    <input type="text" className='form-control' name="name" placeholder='P. Ej:Juan Pedro Garcia Solares' onChange={(event) => setName(event.target.value)}/>  
                </div>
                <div className='form-group'>
                    <label className='form-label'>Correo</label>
                    <input type="email" className='form-control' name="email" placeholder='P. Ej:juan@sistemas.com.gt'onChange={event => setEmail(event.target.value)}/>  
                </div>
                <div className='form-group'>
                    <label className='form-label'>No. de Teléfono</label>
                    <input type="phone" className='form-control' name="phone" placeholder='P. Ej:4444-5555' onChange={event => setPhone(event.target.value)}/>  
                </div>
                <div className='form-group'>
                    <label className='form-label'>Contraseña</label>
                    <input type="password" className='form-control' name="password" placeholder='P. Ej:JuanPedro27.2' onChange={event => setPassword(event.target.value)}/>  
                </div>
                <div className='footer'>
                    <button type="submit" className='btn btn-success'>Registar</button>
                    <button type="button" className='btn btn-danger'>Cancelar</button>
                </div>

                <p className='forgot-password' onClick={handleClick}>Already registered {" "} login in?</p>

                {flag && (
                    <Alert color="primary" variant="danger">
                        Por favor, llene todos los campos.
                    </Alert>
                )}
            </form>
        ):(
            <Login/>
        )}
    </div>
  )
}

export default Register