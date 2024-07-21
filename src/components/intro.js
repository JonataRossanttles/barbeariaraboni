import React from "react";


function Intro() {
  return (
    <>
     <div className='back-header' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagens/background-header.jpg)` }} > </div>

<div className='container-geral-header'>

 <div className='container-text-header'>
 <h1 className='titulo'>BARBEARIA RABONI</h1>
 <h2 className='subtitulo'>SUA MELHOR ESCOLHA</h2>
 <p className='paragrafo-header'>Conheça a melhor barbearia da região, venha conferir e ainda divirta-se enquanto espera.</p>
  </div> 
<div className='container-img-header'>
  
<img src='/imagens/corte3.jpeg' alt='' className='img-header' ></img>

</div>
</div>

    </>

  );
}

export default Intro;
