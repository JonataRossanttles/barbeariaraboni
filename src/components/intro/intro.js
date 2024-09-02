import React,{useEffect, useState,useContext} from "react";
import ScrollReveal from 'scrollreveal';
import { MyContext } from "../../datacontext";
import { Link } from "react-router-dom";

function Intro() {
const {inicio} = useContext(MyContext)

const nameibarberaria = 'BARBEARIA RABONI'
const nameisubtitulo = 'SUA MELHOR ESCOLHA'
const nameibarberariasplit = nameibarberaria.split("")
const nameisubtitulosplit = nameisubtitulo.split("")
const [namefinal,setNamefinal] = useState("")
const [namefinal2,setNamefinal2] = useState("")


useEffect(() => {
  const sr = ScrollReveal() 
  
  const addLetters = () => {
    let newString = '';
    let newletra = '';
    nameibarberariasplit.forEach((element, index) => {
      setTimeout(() => {
        newString += element;
        setNamefinal(newString);
      }, 100 * index);
    });

    nameisubtitulosplit.forEach((element, index) => {
      setTimeout(() => {
        newletra += element;
        setNamefinal2(newletra);
      }, 120 * index);
    });

  };

  addLetters();
  
const rotate = ()=>{
  setTimeout(() => {
    sr.reveal(".titulo",{
      duration: 2000 ,
     rotate:{x:180},
      reset:false
    })
  }, 2000);
 
}
  rotate()
  // Limpeza para garantir que o timer seja limpo se o componente desmontar
 // return () => clearTimeout(timer);
 console.log('b')
}, []);


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
<div className='back-header' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagens/background-header.jpg)` }} ref={inicio} > 

  <div className='container-geral-header' >

  <div className='container-text-header'>
  <h1 className='titulo' > {namefinal}</h1>
  <h2 className='subtitulo'>{namefinal2}</h2>
  <p className='paragrafo-header'>Conheça a melhor barbearia da região, venha conferir e ainda divirta-se enquanto espera.</p>
  <div className="container-button-intro">
  <Link to={'/agendamento'} className="link-intro"> 
  <div className='button-agend'>
      <img src='/imagens/calendario.png' alt='' className='img-whats'></img>
      <span className='text-whats'>Agende seu corte</span> 
    </div>
    </Link>
    <Link to={'/agendamento/consulta'} className="link-intro"> 
  <div className='button-agend'>
      <img src='/imagens/lupa.png' alt='' className='img-whats'></img>
      <span className='text-whats'>Consultar agend.</span> 
    </div>
    </Link>
  </div>
  
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
