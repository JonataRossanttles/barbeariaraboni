import { Link } from 'react-router-dom';
import './consulta.css'
import React, {useState } from "react";
import Load from '../load/load';

function Consulta() {
    document.body.style.backgroundColor = 'black'

    const ticketRef = useState();
    const [nome,Usenome] = useState();
    const [celular,Usecelular] = useState();
    const [corte,Usecorte] = useState();
    const [data,Usedata] =  useState();
    const [hora,Usehora] =  useState();
    const [barbeiro,Usebarbeiro] = useState();
    const [dadosforms,Usedadosforms] = useState(false);
    const [statusloading,Usestatusloading] = useState(false);

  
    function consultar(event){
        event.preventDefault()
        Usestatusloading(true)

        const ticket = ticketRef.current.value
        fetch(`https://backendbarbeariaraboni-1.onrender.com/agendamento/consulta`)
    .then(response=>response.json())
    .then(dados=>{
        const chaves = Object.values(dados)
        const obj = {...chaves[0],...chaves[1]}
        if(ticket in obj){
            Usenome(obj[ticket].nome)
           Usecelular(obj[ticket].celular)
            Usecorte(obj[ticket].corte)
             Usebarbeiro(obj[ticket].barbeiro)
             Usedata(obj[ticket].data)
            Usehora(obj[ticket].hora)
            Usedadosforms(true)
            Usestatusloading(false)
        }else{
            Usestatusloading(false)
            window.alert('Digite um ticket válido!')
            
        }
    
    }).catch((erro)=>{console.log(erro)})



    }
    return (
        <>
         
         <Link to='/'>
    <div className='container-voltar'> 
    <img src='/imagens/seta-voltar.png' className='voltar'></img>
    <span className='text-voltar'>VOLTAR</span>
    </div>
    </Link>
    <div className='container-geral-consulta' >

      <img src='/imagens/logo.png' alt='' className='logo-agend'></img>
      
      <form className='forms-agend' >
        <div className='container-busca'>
            <div className='container-input'>
            <label className='label' id='text-ticket' for='ticket' >Ticket:</label>
            <input name='nome' className='input-ticket'  id='ticket' ref={ticketRef} placeholder='Digite seu ticket'></input>
            </div>
       
        
        </div>
        <div className='container-geral-dados-consulta' style={{display: dadosforms ? 'flex' : 'none' }}>

        
        <span className='titulo-consulta'> Dados do seu agendamento</span>
        <div className='linha'> </div>
       
       <div className='container-dados'>
        <span className='label'>Nome:</span>
        <span className='text-consulta'>{nome}</span>
       </div>
       <div className='container-dados'>
        <span className='label'>Celular:</span>
        <span className='text-consulta'>{celular}</span>
       </div>
       <div className='container-dados'>
        <span className='label'>Barbeiro:</span>
        <span className='text-consulta'>{barbeiro}</span>
       </div>
       <div className='container-dados'>
        <span className='label'>Corte:</span>
        <span className='text-consulta'>{corte}</span>
       </div>
       <div className='container-dados'>
        <span className='label'>Data:</span>
        <span className='text-consulta'>{data}</span>
       </div>
       <div className='container-dados'>
        <span className='label'>Hora:</span>
        <span className='text-consulta'>{hora}</span>
       </div>
       </div> 
       <button className='button-consulta' onClick={consultar}>Consultar</button>
      </form>
      { statusloading && <Load/>}
    </div>
        </>
    
      );


}

export default Consulta;
