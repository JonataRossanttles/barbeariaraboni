import React, {useContext, useEffect} from "react";
import { MyContext } from "../../datacontext"
import ScrollReveal from 'scrollreveal';

function Curso() {

const {curso} = useContext(MyContext) 


useEffect(()=>{
const sr = ScrollReveal() 

sr.reveal(".container-central-curso",{
  duration: 500 ,
  scale:0.5,
  reset:true
})


},[])

  return (
    <>
    <section className="container-geral-curso"   ref={curso}>
  <div className='container-curso' >
    <div className='container-central-curso'>
    <img src='/imagens/poster-curso.webp' alt='' className='poster-curso'></img>
  <div className="container-text-curso">
    <p className='text-curso' >Aprenda os melhores cortes com as melhores técnicas do mercado. Para você que está 
      iniciando e deseja se tornar um barbeiro de excelência, você encontrou o lugar certo.
    </p>
    <a href="https://wa.me/message/JI4QXVDFI6B7F1" target="_blank" className="link">
    <div className='button-curso'>
      <img src='/imagens/whatsapp.png' alt='' className='img-whats'></img>
      <span className='text-whats'>Atendimento via Whats</span> 
    </div>
    </a> 
  </div>
    </div>


  </div>
  
</section>

    </>

  );
}

export default Curso;
