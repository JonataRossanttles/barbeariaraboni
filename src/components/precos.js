import React, { useEffect, useState } from "react";


function Precos() {

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
    <section className="container-geral-precos" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagens/logo1.png)` }}>

<div className="container-precos">


<div className="container-central-precos">

<h1 className="titulo-precos"> Nossos</h1>
<h2 className="subtitulo-precos"> Serviços</h2>
<div className="linha-preco"></div>

<div className="container-text-preco">
  <span className="text">
      Corte (Completo só 1 pente)
  </span>
  <span className="preco">
      R$  10,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Corte social
  </span>
  <span className="preco">
      R$  15,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Corte degradê
  </span>
  <span className="preco">
      R$  18,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Corte (Completo na tesoura)
  </span>
  <span className="preco">
      R$  20,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Barba
  </span>
  <span className="preco">
    R$  10,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Sobrancelha
  </span>
  <span className="preco">
    R$  5,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Sobrancelha com corte
  </span>
  <span className="preco">
    R$  2,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Pezinho
  </span>
  <span className="preco">
    R$  5,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Selagem / Progressiva / Botox
  </span>
  <span className="preco">
  <span className="apartir"> A partir de</span>  R$  30,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Luzes / Reflexo
  </span>
  <span className="preco">
    <span className="apartir"> A partir de</span>   R$  26,00
  </span>
</div>

<div className="container-text-preco">
  <span className="text">
      Platinado / Nevou
  </span>
  <span className="preco">
  <span className="apartir"> A partir de</span>  R$  45,00
  </span>
</div>

<h1 className="titulo-precos"> Combo</h1>

<div className="container-text-preco" style={{ marginTop:'25px'}}>
  <span className="text" style={{fontSize : '24px'}}>
      Degradê, Barba, Sobrancelha, Lavagem, Escova de finalização
  </span>
  <span className="preco">
    R$  30,00
  </span>
</div>



</div>

</div>


</section>

    </>

  );
}

export default Precos;
