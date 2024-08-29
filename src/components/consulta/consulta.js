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

  
function deletar(event){
    event.preventDefault()
    const ticket = ticketRef.current.value
    const inform = {id:ticket,barbeiro:barbeiro}
    if(ticket == "" || barbeiro == undefined){
        console.log(barbeiro)
            window.alert('Realize a consulta antes de cancelar seu agendamento!')
    }else{
        fetch('https://backendbarbeariaraboni-1.onrender.com/agendamento/delete',{method:'POST',headers:{'Content-type':'Application/json'},
            body: JSON.stringify(inform)}).
            then(response=>{if(!response.ok){
                // Se a resposta não for OK (status 400 ou 500), lance um erro para o catch
                return response.json().then(error => { throw new Error(error.messagem); });
                
            }else{
                return response.json();
            }
        
        }).then(dados=>window.alert(dados.mensagem))
        .catch((erro)=>{window.alert(erro)})
    }
    

   
}

    function consultar(event){
        event.preventDefault()
        Usestatusloading(true)
      
        const ticket = ticketRef.current.value
        const inf = {id:ticket}

        if(ticket){
        fetch(`https://backendbarbeariaraboni-1.onrender.com/agendamento/consulta`,{method:'POST',headers:{'Content-Type': 'Application/json'},
            body:JSON.stringify(inf) })
            .then(response=> {if (!response.ok) {
                // Se a resposta não for OK (status 400 ou 500), lance um erro para o catch
                return response.json().then(error => { throw new Error(error.message); });
            }
            return response.json();
        })
            .then(dados=>{
                console.log(dados)
                Usenome(dados.nome)
                Usecelular(dados.celular)
                Usecorte(dados.corte)
                Usebarbeiro(dados.barbeiro)
                Usedata(dados.data)
                Usehora(dados.hora)
                Usedadosforms(true)
                Usestatusloading(false)
            })
            .catch((erro)=>{
                Usestatusloading(false)
                window.alert(erro.message)
            })

}else{
    Usestatusloading(false)
    window.alert('Preencha o campo de ticket!')
}

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
       <div className='container-button'>
       <button className='button-consulta'  onClick={consultar}>Consultar</button>
       <button className='button-delete' onClick={deletar}>Excluir</button>
       </div>
      </form>
      { statusloading && <Load/>}
    </div>
        </>
    
      );


}

export default Consulta;
