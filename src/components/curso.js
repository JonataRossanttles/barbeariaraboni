import React, {useContext} from "react";
import { MyContext } from "../datacontext"


function Curso() {

const {curso} = useContext(MyContext) 


  return (
    <>
    <section className="container-geral-curso"  id="#curso" ref={curso}>
  <div className='container-curso' >
    <div className='container-central-curso'>
    <img src='/imagens/poster-curso.webp' alt='' className='poster-curso'></img>
  <div>
    <p className='text-curso'>Aprenda os melhores cortes com as melhores técnicas do mercado. Para você que está 
      iniciando e deseja se tornar um barbeiro de excelência, você encontrou o lugar certo.
    </p>
    <div className='button-curso'>
      <img src='/imagens/whatsapp.png' alt='' className='img-whats'></img>
     <a href="https://wa.me/message/JI4QXVDFI6B7F1" target="_blank" className="link"> <span className='text-whats'>Atendimento via Whats</span> </a> 
    </div>
  </div>
    </div>


  </div>
  
</section>

    </>

  );
}

export default Curso;
