import React, { useState } from 'react';
import  Lista  from "./Lista";
import { Alert } from "react-bootstrap";

function Login() {
    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flaglog, setFlag] = useState(false);
    const [list, setList] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let email = localStorage.getItem("Email").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if(!emaillog || !passwordlog){
            setFlag(true);
            console.log('Vacio');
        }else if(passwordlog != pass || emaillog != email ){
            setFlag(true);
        }else{
            setList(!list);
            setFlag(false);
        }
    }
  return (
    <div className='container'>
        {list ? (
            <form onSubmit={handleLogin}>
                {flaglog && (
                        <Alert color='primary' variant='danger'>
                            No coinciden con los registros, verifique el usuario y contraseña.
                        </Alert>
                    )
                }
                <h3>Login</h3>
                <div className='form-group'>
                    <label className='form-label'>Correo</label>
                    <input type="email" className='form-control' name="email" placeholder='P. Ej:juan@sistemas.com.gt'onChange={event => setEmaillog(event.target.value)}/>  
                </div>
                <div className='form-group'>
                    <label className='form-label'>Contraseña</label>
                    <input type="password" className='form-control' name="password" placeholder='P. Ej:JuanPedro27.2' onChange={event => setPasswordlog(event.target.value)}/>  
                </div>
                
                <button type="submit" className='btn btn-success'>Login</button>
                <button type="submit" className='btn btn-danger'>Cancelar</button>
                
            </form>
        ):(
            <Lista/>
        )}
    </div>
  )
}

export default Login