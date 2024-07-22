import React, { useEffect, useState } from "react";


function Cortes() {

  const [lista_img_cortes,SetLista_img_cortes] = useState([])
const lista_path = ['/imagens/corte1.png','/imagens/corte2.png','/imagens/corte4.png',
  '/imagens/corte5.png','/imagens/corte6.png','/imagens/corte7.png','/imagens/corte8.png',
  '/imagens/corte9.png','/imagens/corte10.png']
useEffect(()=>{
   const list = lista_path.map((element,index)=> <div key={index} className="corte"> <img src={element} alt="corte" className="img-corte"></img>   </div>  )
  SetLista_img_cortes(list)
},[])



  return (
    <>
<section className="container-geral-cortes">
<div className="container-cortes">

{lista_img_cortes}

</div>




</section>

    </>

  );
}

export default Cortes;
