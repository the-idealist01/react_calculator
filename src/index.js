// import React from 'react';
// import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

// // const myFirstElement = <h1>Hello React!</h1>

// // const myArray = ['apple', 'banana', 'orange'];

// // const myList = myArray.map((item) => <p>{item}</p>)

// // const myelement = (
// //   <table>
// //     <tr>
// //       <th>Name</th>
// //     </tr>
// //     <tr>
// //       <td>John</td>
// //     </tr>
// //     <tr>
// //       <td>Elsa</td>
// //     </tr>
// //   </table>
// // );

// // class Car extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       brand: "Ford",
// //       model: "Mustang",
// //       color: "red",
// //       year: 1964
// //     };
// //   }
// //   changeColor = () => {
// //     this.setState({color: "blue"});
// //   }
// //   render() {
// //     return (
// //       <div>
// //         <h1>My {this.state.brand}</h1>
// //         <p>
// //           It is a {this.state.color} 
// //           {this.state.model} 
// //           from {this.state.year}.
// //         </p>
// //         <button
// //           type="button"
// //           onClick={this.changeColor}
// //         >Change color</button>
// //       </div>
// //     );
// //   }
// // }
// // function Car(props) {
// //   return <h2> One of them is a {props.brand} </h2>;
// // }

// // function Garage(){
// //   const carInfo = "ford";
// //   return (
// //     <>
// //       <h2>I have various cars in my garage</h2>
// //       <p><Car brand={carInfo} /></p>
// //       </>
// //   );
// // }

// // function Football() {
// //   const Shoot = () => {
// //       alert("i shoot the shot") 
// //   }
// //   return (
// //     <button onClick={Shoot}>Shoot</button>
// //   );
// // }

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);



// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// // Rendering the App component into the root DOM element
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// Optional: for measuring performance in your app (you can remove this if you don't need it)
reportWebVitals();
