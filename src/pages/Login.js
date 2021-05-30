import React from 'react'

class Login extends React.Component{
    render() {
        return (
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
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                        <p>¿Aún no tienes una cuenta? <a href="">Registrate aquí.</a></p>
                    </form>
                </div>
            </div>
        </div>
       
            
        )
    }
}

export default Login