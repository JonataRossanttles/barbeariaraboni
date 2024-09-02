import './caixaerro.css'

function Caixaerro({mensagemerro,statuserro,closeerro}) {
    
if(!statuserro){
  return null
}
 
    return (
        <>
           <div className='container-erro' >
      <img src='/imagens/icon-close.svg' alt='' className='fechar-erro' onClick={closeerro}></img>
      <span className='mensagem-erro'> {mensagemerro}</span>
    </div>
        </>
    
      );

    }



export default Caixaerro;
