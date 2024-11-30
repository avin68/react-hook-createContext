import { createContext, useState } from "react";
import Components1 from "./Components1";

// function App() {
//   const [name, setName] = useState("avin esmaeili web developer");
//   return (
//     <>
//       <h1>Component App</h1>
//       <p>hello {name}</p>
//       <hr />
//       <Components1 myName={name} />
//     </>
//   );
// }

// export default App;

// ----------------------------------------------------------------------

export const NameContext = createContext();
console.log(NameContext);

function App() {
  const [name, setName] = useState("avin esmaeili web developer");
  return (
    <>
      {/* <NameContext.Provider value="avin joon developer"> */}
      <NameContext.Provider value={name}>
        <h1>Component Home</h1>
        <p>hello {name}</p>
        <hr />
        <Components1 />
      </NameContext.Provider>
    </>
  );
}

export default App;
