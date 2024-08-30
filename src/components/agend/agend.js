import { Link, useNavigate } from 'react-router-dom';
import './agend.css'
import React, { useEffect, useState,useRef } from "react";
import Confirm from '../results_agend/confirm';
import Load from '../load/load';
import Caixaerro from '../caixaerro/caixaerro';

function Agend() {

const [options,Useoptions] = useState([])
const [dataatual,Usedataatual] = useState([])
const [mensagemerro,Usemensagemerro] = useState()
const [statuserro,Usestatuserro] = useState(false)
const [statusenvio,Usestatusenvio] = useState(false)
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
const [ticket,Useticket] = useState();
const [nome,Usenome] = useState();
const [data,Usedata] = useState();
const [hora,Usehora] = useState();
const [statusloading,Usestatusloading] = useState(false);


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

const barbeiros = ['Augusto','Victor']

document.body.style.backgroundColor = 'black'

// Atualizar a lista de opções de cortes/ nome dos barbeiros
useEffect(()=>{

  const today = new Date();
  const dataatual = today.toISOString().split('T')[0] 
  const barbeironame =  barbeiros.map((element)=> <option className='options'>{element}</option>)
  const name = cortes.map((element)=> <option className='options'>{element}</option>)
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
const date = dataformat
const [ano, mes, dia] = date.split('-');
  const dataFormatada = `${dia}/${mes}/${ano}`;
  console.log(dataFormatada)
const namebarbeiro = barbeiroRef.current.value
const datefinal = {data: dataFormatada, barbeiro: namebarbeiro}
Usehorariosbd([]) // Limpa os horários que vieram do banco
Usedataatual(dataFormatada);

fetch('https://backendbarbeariaraboni-1.onrender.com/agendamento/date', {
  method: 'POST', // Define o método HTTP
  headers: {
      'Content-Type': 'application/json' // Define o tipo de conteúdo como JSON
  }, body: JSON.stringify(datefinal)  }) // Converte o corpo da requisição para uma string JSON
  .then(response => {if (!response.ok) {
    // Se a resposta não for OK (status 400 ou 500), lance um erro para o catch
    return response.json().then(error => { throw new Error(error.message); });
}
return response.json()})
  .then(data => data.map((element)=>{ 
    Usehorariosbd((prev)=> [...prev, element.hora_formatada])})//Armazena os horários do banco em um array

  ).catch((error)=>{
    Usemensagemerro(error.message)
    Usestatuserro(true)
  })
}
useEffect(()=>{
  const dataescolhida = new Date (dataRef.current.value)

  if(dataescolhida.getDay() >= 0 && dataescolhida.getDay() <= 5 ) {
    const hr = horariosem.filter((element)=> !horariosbd.includes(element) )
    const hours = hr.map((element)=><option className='options'>{element}</option>)
    Usehorarios(hours)
    
  }else if(dataescolhida.getDay() >= 6){
    const hrs = horariodom.filter((element)=> !horariosbd.includes(element)) 
    const hour = hrs.map((element)=><option className='options'>{element}</option>)
    Usehorarios(hour)
    
  }else{
    Usehorarios(<option></option>)
  }
},[horariosbd])


function enviar(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  Usestatusloading(true)
  const date = dataRef.current.value
  const [ano, mes, dia] = date.split('-');
      const dataFormatada = `${dia}/${mes}/${ano}`;

  const data = {
    nome: nomeRef.current.value,
    celular: celularRef.current.value,
    barbeiro: barbeiroRef.current.value,
    corte: corteRef.current.value,
    data: dataFormatada,
    hora: horaRef.current.value,
    
  };

  fetch('https://backendbarbeariaraboni-1.onrender.com/agendamento', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log(response)
      if(!response.ok){
     return response.json().then(results=>{throw new Error(results.mensagem)}) // Se a resposta não for OK (status 400 ou 500), lance um erro para o catch
    }
    return response.json()
  })
    .then(data => {
        Useticket(data.id)
        Usenome(nomeRef.current.value)
        Usedata(dataFormatada)
        Usehora(horaRef.current.value)
        Usestatusenvio(true)
        Usestatusloading(false)
        adddata()
        
    })
    .catch(erro => {
      Usemensagemerro(erro.message)
      Usestatuserro(true)
      Usestatusenvio(false)
      Usestatusloading(false)
      
    });
   
}

function limit(input) {
  // Limita o input a 11 dígitos
  if (input.value.length > 11) {
      input.value = input.value.slice(0, 11);
  }
}
function closeerro(){
  Usestatuserro(false)
}

return (
    <>
    <Link to='/'>
    <div className='container-voltar'> 
    <img src='/imagens/seta-voltar.png' className='voltar'></img>
    <span className='text-voltar'>VOLTAR</span>
    </div>
    </Link>
    <div className='container-geral-agend' style={{display: statusenvio ?  'none' : 'flex'}}>

      <img src='/imagens/logo.png' alt='' className='logo-agend'></img>
      
      <form className='forms-agend' >
        <label className='label-agend' for='nome' >Nome:</label>
        <input name='nome' className='input-agend' maxlength="20"  id='nome' ref={nomeRef} required placeholder='Informe seu nome'></input>
        <label className='label-agend' for='celular' >Celular:</label>
        <input name='celular' type="number" min="0"  max="99999999999" className='input-agend' id='celular' ref={celularRef} required placeholder='Informe seu Whatsapp' onInput={(e) => limit(e.target)}></input>
        <label className='label-agend' for='barbeiro'>Barbeiro:</label>
        <select className='input-agend' id='barbeiro' ref={barbeiroRef} onChange={adddata}   >
          <option disabled selected hidden>Selecione um barbeiro</option>
          {barbeiro}
        </select>
        <label className='label-agend' for='barbeiro'>Corte:</label>
        <select className='input-agend' id='corte' ref={corteRef} onChange={corteadd} required>
          {options}
        </select>
        <div className='container-valor'>
        <span className='valor'>{valorfinal}</span>

      </div>
        <label className='label-agend' for='data'>Data:</label>
        <input name='celular' type="date"  className='input-agend' id='data'  onChange={adddata}  ref={dataRef} disabled={status ? false : true}></input>
        <label className='label-agend' for='hora'>Horários disponíveis:</label>
        <select className='input-agend' id='hora' ref={horaRef} disabled={status ? false : true} >
          {horarios}
        </select>
      <button id='button-agend-form' onClick={enviar}>Agendar</button>
      </form>
      
    </div>
    { statuserro && <Caixaerro statuserro={statuserro} mensagemerro={mensagemerro} closeerro={closeerro}/>}
    { statusloading && <Load/>}
    { statusenvio && <Confirm ticket={ticket} nome={nome} data={data} hora={hora} />}
    </>

  );
  
}

export default Agend;
