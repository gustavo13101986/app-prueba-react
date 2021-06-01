import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'



const Login = () => (
    
        <div>
        <Navbar></Navbar>
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-8 col-md-6">
                    <form>
                        <div className="form-group">
                        <label for="exampleInputEmail1">Dirección de correo electrónico</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese correo electrónico"/>
                        <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                        </div>
                        <Link type="submit" className="btn btn-primary mt-2" to="/inicio">Submit</Link>
                        <p>¿Aún no tienes una cuenta? <Link to="/register">Registrate aquí.</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
       
            
)

export default Login