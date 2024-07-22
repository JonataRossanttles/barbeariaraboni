import React, { createContext , useRef} from 'react';


  // Cria o contexto
  const MyContext = createContext();

function MyProvider({ children }) {


const curso = useRef();

    return (
        <MyContext.Provider value={{curso }}>
            {children}
        </MyContext.Provider>
    );


}

export { MyContext, MyProvider };
