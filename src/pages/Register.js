import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function Register () {

  const [user, setUser] = useState({
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      password: '',
    });


  const {nombre, apellido, telefono, email, password} = user

  function evaluarPassword(isNum, isUpperCase){
    let pass = password.split('')
    var num;
    const arrayString = []
    if(pass.length < 7){
      console.log("Error")
    
    }else{
      for (let i = 0; i < pass.length; i++) {
        num = (parseInt(pass[i]))
        if(!isNaN(num)){
          console.log("password cuenta con un numero")
          isNum = true
        }else{
          arrayString.push(pass[i])
        }
        }
        for (let i = 0; i < arrayString.length; i++) {
          if(arrayString[i] == arrayString[i].toUpperCase()){
            console.log(console.log("password cuenta con letra Mayuscula"));
            isUpperCase=true
          
          }
        }
      }
      if(isNum==true && isUpperCase==true){
        return true;
      }else{
        return false
      }
    }
  

  const addUser = (e) => {
    let isNum = false
    let isUpperCase = false
    let isPasswor = evaluarPassword(isNum, isUpperCase)
    console.log(user)
    if(isPasswor){
      console.log('Password es correcto')
      // fetch('URL',{
      //   method: 'POST',
      //   body: JSON.stringify(user),
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   }
      // })
      //     .then(res => console.log(res))
      //     .catch(err => console.error(err))
    }else{
      console.log('Password es incorrecto')
    }
    e.preventDefault();
    }
  

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mt-2">
          <div className="row justify-content-center">
              <div className="col-8 col-md-6">
                  <form onSubmit={addUser}>
                      <div className="form-group">
                        <div className="form-group">
                          <label htmlFor="disabledTextInput">Ingrese su Nombre</label>
                          <input type="text" className="form-control" placeholder="Nombre"
                          name="nombre"
                          onChange={handleChange}
                          value = {nombre}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="disabledTextInput">Apellidos</label>
                          <input type="text" className="form-control" placeholder="Apellidos"
                          name="apellido"
                          onChange={handleChange}
                          value = {apellido}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Telefono</label>
                          <input type="number" className="form-control" placeholder="Telefono"
                          name="telefono" 
                          onChange={handleChange}
                          value = {telefono} 
                          />
                        </div>
                        <label htmlFor="exampleInputEmail1">Dirección de correo electrónico</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Ingrese correo electrónico"
                        name="email" 
                        onChange={handleChange}
                        value = {email}
                        />
                        <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                        <label>Contraseña</label>
                        <input type="password" className="form-control" placeholder="Contraseña"
                        name="password"
                        onChange={handleChange}
                        value = {password}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary mt-2">Submit</button>
                  </form>
                  <p>¿Si estas registrado? <Link to="/login">Inicia sección aquí.</Link></p>
              </div>
          </div>
      </div>
    </div>


        )
}

export default Register