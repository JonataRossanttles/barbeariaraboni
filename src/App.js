import './App.css';
import Curso from './components/curso';
import Header from './components/header';
import Intro from './components/intro';
import Cortes from './components/cortes';
import Precos from './components/precos';
import Location from './components/location';
import Footer from './components/footer';
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
