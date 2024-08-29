import './confirm.css'
import React, { useEffect } from "react";

function Confirm({ticket, nome, data, hora}) {


return (
    <>
     
    <div className='container-confirm-geral'>
      <img src='/imagens/confirm.png' className='img-confirm'></img>
      <span className='text-confirm'>{nome}, obrigado pela preferência, seu agendamento foi realizado com sucesso. 
        Estaremos te esperando no dia {data} às {hora}. <br/> 
         Guarde o seu ticket para consultar seu agendamento.  </span>
         <span className='text-ticket'> 
         Ticket: {ticket}  </span>
    </div>
    </>

  );
}

export default Confirm;
