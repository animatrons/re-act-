
//*statless or functional componenet

import React from "react";

function Hello(props) {
   return (
       <h2>Hello {props.name}</h2>
   )
}


//* class component
// class Hello extends React.Component {
//     render(){
//         return (
//             <h1>
//                 Hello {this.props.name}
//             </h1>
//         )
//     }
// }

export default Hello;