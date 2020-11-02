import {Nav} from 'react-bootstrap';

// Link recargar un componente a traves de la prop to=
// NavLink resaltar el elemento en el que se encuentra activo
import {NavLink} from 'react-router-dom';

/*
    const nav = [
        {
            path : '/alumnos',
            title: 'Alumnos'
        }
    ]
*/

const Navbar = () => {
    return (  
        <>
            <Nav className="justify-content-center" activeKey="/">
                <Nav.Item>
                    <NavLink 
                        to="/" 
                        exact activeStyle={{color:'red'}} 
                        className="mr-1"> Home
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink 
                        to="/alumnos" 
                        exact activeStyle={{color:'red'}} 
                        className="mr-1"> Alumnos
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink 
                        to="/alumnos/nuevo" 
                        activeStyle={{color:'red'}} 
                        className="mr-1">Nuevo Alumnos
                    </NavLink>
                </Nav.Item>
            </Nav>
        </>
    );
}
 
export default Navbar;