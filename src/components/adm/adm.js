import { useNavigate,useLocation } from 'react-router-dom';
import './adm.css'
import React, {useState,useRef, useEffect } from "react";


function Adm() {
 
  const url = useLocation()
  const [nome,Usestate] = useState()
  const [optionuser,Useoptionuser] = useState(false)
   const [agendamentos,Useagendamentos] = useState();
  const barbeiroRef = useRef()
  const dataRef = useRef()
  const navigate = useNavigate()
  const [statuslib,Usesatatuslib] = useState(false)
  const [barbeiro,Usebarbeiro] = useState([])
  const barbeiros = ['Augusto','Victor']
  document.body.style.backgroundColor = 'white'
  
  // Implementar os nomes dos barbeiros
  useEffect(()=>{
    const barbeironame =  barbeiros.map((element)=> <option className='options'>{element}</option>)
    Usebarbeiro(barbeironame)
    if(!url.state || !url.state.nome){
      navigate('/login')
    }else{
      Usestate(url.state.nome)
    }
  },[])

// Verificar se o token está valido. 
function verificy(){
 const  token = localStorage.getItem('tokenid')
 fetch('https://backendbarbeariaraboni-1.onrender.com/login/consulta',{method:'POST',
  headers:{'Content-Type': 'Application/json','authorization':token}}).
 then(response=>{if(!response.ok){
      return response.json().then(erro=> {throw new Error(erro.message)} 
      )
 }

}).catch((erro)=>{
  navigate('/login/')
})
  
}
useEffect(()=>{
  const today = new Date();
  const dataatual = today.toISOString().split('T')[0] 
  setTimeout(() => {
    if (dataRef.current) {
      dataRef.current.value = dataatual;
    }
  }, 0);
  verificy()
},[])
//Traz os dados para a tabela
function dados(){
  Usesatatuslib(true)
  const date = dataRef.current.value 
  const [ano, mes, dia] = date.split('-');
  const dataFormatada = `${dia}/${mes}/${ano}`;
  const information = {barbeiro: barbeiroRef.current.value,data: dataFormatada }
  console.log(dataRef.current.value)
  fetch('https://backendbarbeariaraboni-1.onrender.com/adm', {
    method: 'POST', // Define o método HTTP
    headers: {
        'Content-Type': 'application/json',
        'authorization':localStorage.getItem('tokenid')
    }, body: JSON.stringify(information)  }).
    then(response => {if (!response.ok) {

      return response.json().then(error => { throw new Error(error.message); });
  }
  return response.json()}).

  then(dados=>
  {const agendamentos = dados.map((element)=><tr>
                <td>{element.nome}</td>
                <td>{element.celular}</td>
                <td>{element.corte}</td>
                <td>{element.hora}</td>
            </tr>)
    Useagendamentos(agendamentos)
    
  }
  ).

  catch((erro)=>{
    navigate('/login/')
  })


}

function option(){
  Useoptionuser(!optionuser)
}
function logoff(){
  localStorage.clear()
  navigate('/login')
}

    return (
        <>
        <div>
   <header className='header-adm'>
   <img src='/imagens/logo-sem-fundo.png' alt='logo' className='logo-adm' ></img>
   <div className='container-usuario-logo' onClick={option}>
   <img src='/imagens/usuario.png' alt='usuario' className='usuario' ></img>
      <span style={{color:'white'}}>{nome}</span>
   </div>
   <div className='container-option-user' style={{display: optionuser? 'flex': 'none'}} onClick={logoff}>
    <span className='option-user' >Sair</span>
   </div>
   </header>
   <section>
    <div className='select'>
      <div className='container-select-barbeiro'>
        <label className='label-adm' for='barbeiro'>Barbeiro:</label>
        <select className='input-adm' id='barbeiro' ref={barbeiroRef} onChange={dados}   >
                <option disabled selected hidden>Selecione um barbeiro</option>
                {barbeiro}
              </select>
        </div>
       <div className='container-data-geral'>
          <label className='label-adm' for='data'>Data:</label>
          <div className='container-data'>
              <input name='celular' type="date"  className='input-adm-data' id='data' ref={dataRef} onChange={dados} disabled={ statuslib ? false : true} ></input>
          </div> 
        </div>
      </div>
   </section>
   <h2 className='titulo-table'>Agendamentos</h2>
   <div className='container-geral-table'>
   <table className='tabela-adm'>
    <thead className='cabecalho-tabela'>
      <tr>
        <th>Nome</th>
        <th>Celular</th>
        <th>Corte</th>
        <th>Hora</th>
        </tr>
        </thead>
        <tbody>
       {agendamentos}
        </tbody>
    
   </table>
   </div>

        </div>
        </>
    
      );

    }



export default Adm;
