import React from 'react'

class Register extends React.Component{
    render() {
        return (
    <div className="container mt-2">
        <div className="row justify-content-center">
            <div className="col-8 col-md-6">
                <form>
                    <div className="form-group">
                      <div className="form-group">
                        <label for="exampleInputPassword1">Ingrese su Nombre</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Apellidos</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Apellidos"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1">Telefono</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="Telefono"/>
                      </div>
                      <label for="exampleInputEmail1">Dirección de correo electrónico</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese correo electrónico"/>
                      <small id="emailHelp" className="form-text text-muted"></small>
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
                <p>¿Si estas registrado? <a href="">Inicia sección aquí.</a></p>
            </div>
        </div>
    </div>


        )
    }
}

export default Register