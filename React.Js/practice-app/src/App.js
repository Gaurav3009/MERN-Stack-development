// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
//   let data = [
//     {
//       name : "Ayush",
//       section : "TS82"
//     },
//     {
//       name : "Gaurav",
//       section : "TS02"
//     },
//     {
//       name : "Sanish",
//       section : "TS13"
//     }
// ];

  return ( //Return function will always expect a single html element to return as a parent.
  //  <div>
  //   {
  //     data.map((info,index)=>(
  //        <Print key={index} data={info}/>
  //        <Print data = {obj}/>
  //     ))
  //   }
  //  </div>
  <div>
    <Navbar/>
    <Main/>
    <Footer/>
  </div>

  );
}

export default App;
