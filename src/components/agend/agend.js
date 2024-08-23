import { Link, useNavigate } from 'react-router-dom';
import './agend.css'
import React, { useEffect, useState,useRef } from "react";



function Agend() {


  fetch('https://barbeariaraboni-eb7b4-default-rtdb.firebaseio.com/Augusto.json',{method:'POST',
    headers:{'Content-Type':'Application/json'},
   body:JSON.stringify({nome:'Carlos',celular:'986919984',corte:'degradê'})}).then(response=>response.json()).
   then(data=>console.log(data))


const [options,Useoptions] = useState([])
const [dataatual,Usedataatual] = useState([])
const [statuserro,Usestatuserro] = useState()
const navigate = useNavigate()
const [statusenvio,Usestatusenvio] = useState([])
const [status,Usestatus] = useState(false)
const [horarios,Usehorarios] = useState([])
const [barbeiro,Usebarbeiro] = useState([])
const [horariosbd,Usehorariosbd] = useState([])
const [valorfinal,Usevalorfinal] = useState([])
const nomeRef = useRef();
const celularRef = useRef();
const corteRef = useRef();
const dataRef = useRef();
const horaRef = useRef();
const barbeiroRef = useRef();



const horariosem = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30',
  '15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30']
const horariodom = ['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30']

const cortes = ['Corte completo (Só um pente)', 'Corte social', 'Corte degradê','Corte (Completo na tesoura)',
  'Barba', 'Sobrancelha','Sobrancelha com corte','Pezinho','Selagem','Progressiva','Botox','Luzes','Reflexos','Platinado','Nevou'
,'Combo: Degradê, Barba, Sobrancelha, Lavagem, Escova de finalização']

const valor = {'Corte completo (Só um pente)': 'Valor fixo - R$ 20,00', 'Corte social':'Valor fixo - R$ 15,00', 'Corte degradê':'Valor fixo - R$ 18,00','Corte (Completo na tesoura)':'Valor fixo -R$ 20,00',
  'Barba':'Valor fixo - R$ 10,00', 'Sobrancelha':'Valor fixo - R$ 5,00','Sobrancelha com corte':'Valor fixo - R$ 2,00','Pezinho':'Valor fixo - R$ 5,00','Selagem':'A partir de R$ 30,00','Progressiva':'A partir de R$ 30,00'
  ,'Botox':'A partir de R$ 30,00','Luzes':'A partir de R$ 26,00','Reflexos':'A partir de R$ 26,00','Platinado':'A partir de R$ 45,00','Nevou':'A partir de R$ 45,00',
  'Combo: Degradê, Barba, Sobrancelha, Lavagem, Escova de finalização':' Valor fixo - R$ 30,00'
}

const barbeiros = ['Augusto','Pedro']

document.body.style.backgroundColor = 'black'

// Atualizar a lista de opções de cortes/ nome dos barbeiros
useEffect(()=>{

  const today = new Date();
  const dataatual = today.toISOString().split('T')[0] 
  const barbeironame =  barbeiros.map((element)=> <option>{element}</option>)
  const name = cortes.map((element)=> <option>{element}</option>)
  Usedataatual(dataatual);
  Useoptions(name)
   Usebarbeiro(barbeironame)

   setTimeout(() => {
    dataRef.current.value = dataatual
   corteRef.current.value = cortes[0]
   // barbeiroRef.current.value = barbeiros[0]; // Definindo o barbeiro inicial
  corteadd()
   }, 0);
   
},[])

function corteadd(){
  
  const valorcorte = valor[corteRef.current.value]
  Usevalorfinal(valorcorte)
 
}
 
// Atualizar a lista de opções de horários
function adddata(){
Usestatus(true)
// transformando a string em um objeto
const dataescolhida = new Date (dataRef.current.value)
const dataformat = dataescolhida.toISOString().split('T')[0] 
const namebarbeiro = barbeiroRef.current.value
const date = {data: dataescolhida, barbeiro: namebarbeiro}
Usehorariosbd([]) // Limpa os horários que vieram do banco
Usedataatual(dataformat);

fetch('/agendamento/date', {
  method: 'POST', // Define o método HTTP
  headers: {
      'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
  }, body: JSON.stringify(date)  }) // Converte o corpo da requisição para uma string JSON
  .then(response => response.json())
  .then(data => data.map((element)=>{ console.log(data)
    Usehorariosbd((prev)=> [...prev, element.hora_formatada])})//Armazena os horários do banco em um array

  ).catch((error)=>{
    console.log(error)
  })
}
useEffect(()=>{
  const dataescolhida = new Date (dataRef.current.value)

  if(dataescolhida.getDay() >= 0 && dataescolhida.getDay() <= 5 ) {
    const hr = horariosem.filter((element)=> !horariosbd.includes(element) )
    const hours = hr.map((element)=><option>{element}</option>)
    Usehorarios(hours)
    
  }else if(dataescolhida.getDay() >= 6){
    const hrs = horariodom.filter((element)=> !horariosbd.includes(element)) 
    const hour = hrs.map((element)=><option>{element}</option>)
    Usehorarios(hour)
    
  }else{
    Usehorarios(<option></option>)
  }
},[horariosbd])


function enviar(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  const data = {
    nome: nomeRef.current.value,
    celular: celularRef.current.value,
    barbeiro: barbeiroRef.current.value,
    corte: corteRef.current.value,
    data: dataRef.current.value,
    hora: horaRef.current.value,
    
  };

  fetch('/agendamento', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => {
      if(!response.ok){
     return response.json().then(results=>{throw new Error(data.message)}) //Força ir para o catch caso de erro
    }
    return response.json()
  })
    .then(data => {
        Usestatusenvio(true)
        adddata()
        navigate('/agendamento/sucess')
    })
    .catch(error => {
      window.alert('Preencha todos os campos!')
      Usestatusenvio(false)
      
    });
   
}



return (
    <>
    <div className='container-geral-agend'>

      <img src='/imagens/logo.png' alt='' className='logo-agend'></img>
      
      <form className='forms-agend' >
        <label className='label' for='nome' >Nome:</label>
        <input name='nome' className='input-agend'  id='nome' ref={nomeRef} required></input>
        <label className='label' for='celular' >Celular:</label>
        <input name='celular' type="number" min="0"  className='input-agend' id='celular' ref={celularRef} required></input>
        <label className='label' for='barbeiro'>Barbeiro:</label>
        <select className='input-agend' id='barbeiro' ref={barbeiroRef} onChange={adddata}   >
          <option disabled selected hidden>Selecione um barbeiro</option>
          {barbeiro}
        </select>
        <label className='label' for='barbeiro'>Corte:</label>
        <select className='input-agend' id='corte' ref={corteRef} onChange={corteadd} required>
          {options}
        </select>
        <div className='container-valor'>
        <span className='valor'>{valorfinal}</span>

      </div>
        <label className='label' for='data'>Data:</label>
        <input name='celular' type="date"  className='input-agend' id='data'  onChange={adddata}  ref={dataRef} disabled={status ? false : true}></input>
        <label className='label' for='hora'>Horários disponíveis:</label>
        <select className='input-agend' id='hora' ref={horaRef} disabled={status ? false : true} >
          {horarios}
        </select>
      <button id='button-agend-form' onClick={enviar}>Agendar</button>
      </form>
      
    </div>
   
    
    </>

  );
  
}

export default Agend;
