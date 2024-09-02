import React, { useEffect,useContext } from "react";
import { MyContext } from "../../datacontext";
import ScrollReveal from "scrollreveal";

function Precos() {
  const {servicos} = useContext(MyContext)

  useEffect(() => {
    // Inicializar o ScrollReveal após a lista de imagens ser definida
    const sr = ScrollReveal();
    
    sr.reveal('.text', {
      duration: 1000,
      opacity: 0,  // Ajustado para 360 graus
      reset: false,
    });

    sr.reveal('.preco', {
      duration: 1000,
      opacity: 0,  // Ajustado para 360 graus
      reset: false,
    });
  }, []);
  return (
    <>
    <section className="container-geral-precos" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/imagens/logo1.png)` }} ref={servicos}>

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
  <span className="text" style={{fontSize : '24px'}} id="text-preco">
      Degradê, Barba, Sobrancelha, Lavagem, Escova de finalização
  </span>
  <span className="preco" id="preco">
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
