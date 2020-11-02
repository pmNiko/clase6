import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Alumnos from './Components/Pages/Alumnos';
import Alumno from './Components/Pages/Alumno';

const Home = () => {
  return <h1>Home Component</h1>
}


// const Alumno = ({match}) => {
//   console.log(match.params);
//   return <h2>Crear Alumnos Component</h2>;
// }

function App() {
  return (
    <>      
      {/* El BrowserRouter se pone en el nivel mas elevado de nuestra app */}
      <Router>
        <section>
          <Navbar />
        </section>
        {/* dentro se definen las rutas con path y component */}
        <Route path="/" exact component={Home} />
        <Route path="/alumnos" exact component={Alumnos} />
        <Route path="/alumnos/:id" component={Alumno} />
      </Router>
    </>
  );
}

export default App;

