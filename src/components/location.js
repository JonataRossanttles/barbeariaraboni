import React, {useContext} from "react";
import { MyContext } from "../datacontext";


function Location() {

const {localizacao} = useContext(MyContext)



return (
    <>
<section className="container-geral-location" ref={localizacao}>
  <div className="container-central-location">
  <div className="container-text-location">
  <h1 className="titulo-location"> Localização</h1>
   <p className="text-location">A BARBEARIA RABONI se destaca no mercado com uma abordagem inovadora,
     valorizando a estética masculina ao oferecer serviços de alta qualidade e 
     momentos de lazer para homens exigentes e de bom gosto.
     </p>
     <ul className="lista-location">
      <li className="option-location">
        <img src="/imagens/whatsapp.png" alt="" className="icon-location"></img>
        <span className="text-location">Whatsapp : 81 99543-1412 </span>
      </li>
      <li className="option-location">
        <img src="/imagens/icon-relogio.png" alt="" className="icon-location"></img>
        <span className="text-location">Terça à sábado : 09:00 às 18:30 | Domingo: 09:00 às 13:30   </span>
      </li>
      <li className="option-location">
        <img src="/imagens/icon-localizacao.png" alt="" className="icon-location"></img>
        <span className="text-location">  Rua Galo de Campina - Passarinho, Recife - PE, 52170-040 </span>
      </li>
     
     </ul>
     </div>
     <div>
      <img src="/imagens/img-location.jpeg" alt="" className="img-location"/>
     </div>

     </div>
</section>

    </>

  );
}

export default Location;
