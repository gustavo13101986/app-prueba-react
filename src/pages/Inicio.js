import React from 'react'
import '../components/styles/Inicio.css';



class Inicio extends React.Component{
    render() {
        return (
            <div className="container-fluid p-0">
            <div className="row">
                <div className="col-2 bg-dark pl-0 pr-0">
                            <div className="sidebar-logo">
                                <h1>LAE</h1>
                                <p> International Education</p> 
                            </div>
                            <div>
                                <a href="#" className="d-block pb-3 sidebar-menu__a"><i className="p-2 icon ion-md-home"></i>Inicio</a>
                                <a href="#" className="d-block pb-3 sidebar-menu__a"><i className="p-2 icon ion-md-people"></i>Usuarios</a>
                                <a href="#" className="sidebar-menu__tarea"><i className="p-2 icon ion-md-options"></i>Tareas</a>
                                <a href="#" className="sidebar-menu__confi"><i className="p-2 icon ion-md-settings"></i>
                                    Configuración</a>
                                </div>
                </div>
                <div className="col-10 p-0">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                          <h4>
                            Inicio
                          </h4>
                        </div>
                    </nav>
    
                </div>
            </div>
        </div>


    )
  }
}

export default Inicio