import './App.css';
import Curso from './components/curso';
import Header from './components/header';
import Intro from './components/intro';
import Cortes from './components/cortes';
import Precos from './components/precos';
import Location from './components/location';
import Footer from './components/footer';
import Agend from './components/agend/agend';
import Confirm from './components/results_agend/confirm';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

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
    <Route path='/agendamento/sucess' element={<Confirm/>}/>
</Routes>


</Router>
    </>

  );
}

export default App;
