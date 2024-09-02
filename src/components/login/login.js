import { Link,useNavigate } from 'react-router-dom';
import './login.css'
import React, {useState,useRef, useEffect } from "react";
import Caixaerro from '../caixaerro/caixaerro';
import Load from '../load/load';

function Login() {
    const navigate = useNavigate()
    const [mensagemerro,Usemensagemerro] = useState()
    const [statuserro,Usestatuserro] = useState(false)
   const [nomeusuario,Usenomeusuario] = useState()
    const emailref = useRef()
    const senharef = useRef()
    const [statuslog,Usestatuslog] = useState(false)
    const [statusloading,Usestatusloading] = useState(false);
   
    document.body.style.backgroundColor = 'black'

function logar(event){
    event.preventDefault()
    Usestatusloading(true)
    const dados = {
        email:emailref.current.value,
        senha: senharef.current.value
    }
   
    if(emailref.current.value === '' || senharef.current.value === '' ){
        Usemensagemerro('Preencha todos os campos!')
        Usestatusloading(false)
        Usestatuserro(true)
    }else{

        fetch('https://backendbarbeariaraboni-1.onrender.com/login/auth',{method:'POST',
            headers:{'Content-Type':'Application/json'},
        body:JSON.stringify(dados)
        }).then(response=>{
    
            if (!response.ok) {
            // Se a resposta não for OK (status 400 ou 500), lance um erro para o catch
            return response.json().then(error => { throw new Error(error.message); });
        }else{
            const token = response.headers.get('tokenid')
            localStorage.setItem('tokenid',token)
            return response.json()
        }
       
    }).then(dados=>{
        Usenomeusuario(dados.nome)
        localStorage.setItem('nome',dados.nome)
        Usestatuslog(true)
        Usestatuserro(false)
        Usestatusloading(false)
    })
    .catch((erro)=>{
        Usestatuslog(false)
        Usestatuserro(true)
        Usestatusloading(false)
        Usemensagemerro(erro.message)
        
    })

    }
  
}
useEffect(()=>{
    if(statuslog){
        navigate('/login/adm',{state:{nome:nomeusuario}})
    }
    
   },[statuslog])

   function closeerro(){
    Usestatuserro(false)
  }
// Verificar se o token está valido. 
function verificy(){
    const  token = localStorage.getItem('tokenid')
    fetch('https://backendbarbeariaraboni-1.onrender.com/login/consulta',{method:'POST',
     headers:{'Content-Type': 'Application/json','authorization':token}}).
    then(response=>{if(!response.ok){
        return response.json().then(erro=> {throw new Error(erro.message)} 
         )
    }else{
        const name = localStorage.getItem('nome')
        navigate('/login/adm',{state:{nome:name}})
    }
   
   }).catch((erro)=>{
     navigate('/login/')
   })
     
   }
// Ativa a verificação do token.
   useEffect(()=>{
    verificy()
},[])
    return (
        <>

     <div>
     <Link to='/' >
    <div className='container-voltar'> 
    <img src='/imagens/seta-voltar.png' className='voltar'></img>
    <span className='text-voltar'>VOLTAR</span>
    </div>
    </Link>
        <div className='container-geral-login' >

       <img src='/imagens/logo.png' alt='' className='logo-login'></img>
         <form className='forms-agend'>
         
         <label className='label-login' for='email' >Email:</label>
         <input name='nome' className='input-login'  id='email'  ref={emailref} required placeholder='Informe seu nome'></input>
         <label className='label-login' for='senha' >Senha:</label>
         <input  type = 'password' name='nome' className='input-login'  id='senha' ref={senharef} required placeholder='Informe seu senha'></input>
         <button id='button-agend-form' onClick={logar}>Logar</button>
         </form>
         </div>
         { statuserro && <Caixaerro statuserro={statuserro} mensagemerro={mensagemerro} closeerro={closeerro}/>}
         </div>
           
         { statusloading && <Load/>}

        </>
    
      );

    }



export default Login;
