import { Link,useNavigate,useLocation } from 'react-router-dom';
import './caixaconfirm.css'
import React, {useState,useRef, useEffect } from "react";


function Caixaconfirm({deletar,caixaconfirm,fechar}) {
 
 if(!caixaconfirm){
  return null
 }
    return (
        <>
        <div className='container-geral-caixaconfirm'>
        <div className='container-caixaconfirm'>
        <span>Você deseja realmente excluir?</span>
        <div className='container-button'>
        <button className='button-caixaconfirm' id='button-ok' onClick={deletar}>OK</button>
        <button className='button-caixaconfirm' id='button-cancelar' onClick={fechar}>Cancelar</button>
        </div>
        </div>
          
        </div>
        

        </>
    
      );

    }



export default Caixaconfirm;
