import React,{useEffect} from "react";
import ScrollReveal from 'scrollreveal';

function Intro() {

  useEffect(()=>{
    const sr = ScrollReveal() 
    
    sr.reveal(".container-geral-header",{
      duration: 500 ,
      scale:1.2,
      reset:true
    })
    
    
    },[])


  return (
    <>
<div className='back-header' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagens/background-header.jpg)` }} > 

  <div className='container-geral-header'>

  <div className='container-text-header'>
  <h1 className='titulo'>BARBEARIA RABONI</h1>
  <h2 className='subtitulo'>SUA MELHOR ESCOLHA</h2>
  <p className='paragrafo-header'>Conheça a melhor barbearia da região, venha conferir e ainda divirta-se enquanto espera.</p>
    </div> 
  <div className='container-img-header'>
    
  <img src='/imagens/corte3.png' alt='' className='img-header' ></img>

  </div>
  </div>
</div>
    </>

  );
}

export default Intro;
