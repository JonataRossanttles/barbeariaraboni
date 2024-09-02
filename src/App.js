import './App.css';
import Curso from './components/curso/curso';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Cortes from './components/cortes/cortes';
import Precos from './components/precos/precos';
import Location from './components/location/location';
import Footer from './components/footer/footer';
import Agend from './components/agend/agend';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Consulta from './components/consulta/consulta';
import Login from './components/login/login';
import Adm from './components/adm/adm';


function App() {
  
  return (
    <>
<Router>

  <Routes>
  <Route path='/' element={
      <>
      <Header/>
      <Intro/>
      <Curso/>
      <Cortes/>
      <Precos/>
      <Location/>
      <Footer/>
    </>

    }/>
    <Route path='/agendamento' element={<Agend/>}/>
    <Route path='/agendamento/consulta' element={<Consulta/>}/>
    <Route path='/login' element={<Login></Login>}/>
    <Route path='/login/adm' element={<Adm></Adm>}/>
   
   
</Routes>


</Router>
    </>

  );
}

export default App;
