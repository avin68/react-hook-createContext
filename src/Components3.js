// function Components3({myName}) {
//   return (
//     <>
//       <h1>Component3</h1>
//       <p>hello {myName}</p>
//       <hr />
//     </>
//   );
// }



// export default Components3;

// ----------------------------------------------------------------------

// function Components3({myName2}) {
//     return (
//       <>
//         <h1>Component3</h1>
//         <p>hello {myName2}</p>
//         <hr />
//       </>
//     );
//   }
  
//   export default Components3;
  

  // ----------------------------------------------------------------------
  import { useContext } from "react";
import { NameContext } from "./App";

  function Components3() {
    const myName = useContext(NameContext)
    return (
      <>
        <h1>Component3</h1>
        <p>hello {myName}</p>
        <hr />
      </>
    );
  }
  
  export default Components3;