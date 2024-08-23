import './confirm.css'
import React, { useEffect, useState,useRef } from "react";

function Confirm() {
 // host:'http://sql110.infinityfree.com',
//  user:'if0_37158059',
 // password:'aE4THicHPsN7Upg',
 // port:'3306',
 // database:'if0_37158059_barbeariaraboni'

return (
    <>
    <div className='container-confirm-geral'>
      <img src='/imagens/confirm.png' className='img-confirm'></img>
      <span className='text-confirm'>Obrigado pela preferência. Seu agendamento foi realizado com sucesso. </span>
    </div>
    </>

  );
}

export default Confirm;
