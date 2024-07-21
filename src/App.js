import './App.css';
import Header from './components/header';
import Intro from './components/intro';


function App() {
  return (
    <>
     
<Header/>
<Intro/>

<section  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagens/back-section1.webp)` }}>
  <div className='container-section' >
    <div className='container-central-section1'>
    <img src='/imagens/poster-curso.webp' alt='' className='img-august-section'></img>
  <div>
    <p className='text-curso'>Aprenda os melhores cortes com as melhores técnicas do mercado, para você que está 
      iniciando e deseja se tornar um barbeiro de excelencia, você encontrou o lugar certo.
    </p>
    <div className='button-curso'>
      <img src='/imagens/whatsapp.png' alt='' className='img-whats'></img>
      <span className='text-whats'>Atendimento via Whats</span>
    </div>
  </div>
    </div>


  </div>
  
</section>


    </>

  );
}

export default App;
