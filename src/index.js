import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {useState} from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.Increase = this.Increase.bind(this,[]);
    this.Decrease = this.Decrease.bind(this,[]);
    this.Reset = this.Reset.bind(this,[]);
  }
  Increase(){
    this.setState({
      count: this.state.count + 1
    });
  }
  Decrease(){
    this.setState({
      count: this.state.count - 1
    });
  }
  Reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <main className = "grid justify-center bg-purple-800 text-white h-screen">
        <section className='m-auto text-center'>
          <h1 className='text-7xl'>Counter</h1>
          <div className='text-5xl py-4 my-7 border border-white border-dashed rounded-full'>{this.state.count}</div>
          <div className='flex justify-center gap-5'>
            <button className='bg-yellow-400 hover:bg-yellow-600 py-3 px-10 font-bold text-xl rounded-2xl' onClick={this.Increase}>Increase</button>
            <button className='bg-pink-400 hover:bg-pink-600 py-3 px-10 font-bold text-xl rounded-2xl'  onClick={this.Decrease}>Decrease</button>
          </div>
          <button className='bg-blue-400 hover:bg-blue-600 py-3 px-20 font-bold text-xl my-10 rounded-2xl' onClick={this.Reset}>Reset</button>
        </section>
      </main>
    );
  }
}

// function App() {
//   const [count, setCount] = useState(0);

//   const Increase =()=> {
//     setCount(count + 1);
//   };
//   const Decrease = ()=> {
//     setCount (count-1);
//   };
//   const Reset = () => 
//     setCount(0);
//   };

//   return (
//     <main className = "grid justify-center bg-purple-800 text-white h-screen">
//       <section className='m-auto text-center'>
//         <h1 className='text-7xl'>Counter</h1>
//         <div className='text-5xl py-4 my-7 border border-white border-dashed rounded-full'>{count}</div>
//         <div className='flex justify-center gap-5'>
//           <button className='bg-yellow-400 hover:bg-yellow-600 py-3 px-10 font-bold text-xl rounded-2xl' onClick={Increase}>Increase</button>
//           <button className='bg-pink-400 hover:bg-pink-600 py-3 px-10 font-bold text-xl rounded-2xl'  onClick={Decrease}>Decrease</button>
//         </div>
//         <button className='bg-blue-400 hover:bg-blue-600 py-3 px-20 font-bold text-xl my-10 rounded-2xl' onClick={Reset}>Reset</button>
//       </section>
//     </main>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

