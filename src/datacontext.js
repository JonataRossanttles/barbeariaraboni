import React, { createContext , useRef} from 'react';


  // Cria o contexto
  const MyContext = createContext();

function MyProvider({ children }) {


const curso = useRef();
const cortes = useRef();
const servicos = useRef();
const localizacao = useRef();
console.log(curso)

    return (
        <MyContext.Provider value={{curso,cortes,servicos,localizacao }}>
            {children}
        </MyContext.Provider>
    );


}

export { MyContext, MyProvider };
