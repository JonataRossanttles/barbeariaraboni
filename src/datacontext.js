import React, { createContext , useRef} from 'react';


  // Cria o contexto
  const MyContext = createContext();

function MyProvider({ children }) {

const inicio = useRef();
const curso = useRef();
const cortes = useRef();
const servicos = useRef();
const localizacao = useRef();


    return (
        <MyContext.Provider value={{inicio,curso,cortes,servicos,localizacao }}>
            {children}
        </MyContext.Provider>
    );


}

export { MyContext, MyProvider };
