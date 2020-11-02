import React from 'react';
import useGet from '../../services/useHTTP';
import {Button,Container,Row,Col, Image} from 'react-bootstrap';

// recibo por parametro la prop implicita props y la destructuro 
// quedandome con la prop que me interesa "match"
const Alumno = ({match}) => {
    // utilizo el custom hook para realizar la petición 
    // y destructuro el array que me devuelve
    const [alumno,isFetching,error] = useGet({
        url:`alumnos/single/${match.params.id}`
    });

    // detsructuro el objeto que que me devuelve el custom hook
    const {imagen,nombre,apellido,edad,descripcion} = alumno;

    return (  
        <>
            <Container>
                <Row>
                    <Col>
                        <Image src={imagen}></Image>
                    </Col>
                    <h3> {apellido} {nombre} {edad} </h3>
                    <p> {descripcion} </p>
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}
 
export default Alumno;


/*
    tarea 3 vistas
    /home breve descripcion 
    /personajes todos los personajes
    /personajes/:id vista individual
*/