import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  class Quadrado extends React.Component{
    render() {
      return (
        <button className='square' onClick={this.props.onClick}> 
        {this.props.value}
        </button>
      )

      
    }


  }

  class Tabuleiro extends React.Component{
    renderSquare(i) {
      return <Quadrado value = {this.props.squares[i]} onClick={() => this.props.onClick(i)}   />
    }

    render () {
      return (
        <div>
          <div className='tabu-linhas'>
            {this.render.square(0)}
            {this.render.square(1)}
            {this.render.square(2)}
          </div> 

          <div className='tabu-linhas'>
            {this.render.square(3)}
            {this.render.square(4)}
            {this.render.square(5)}
          </div> 

          <div className='tabu-linhas'>
            {this.render.square(6)}
            {this.render.square(7)}
            {this.render.square(8)}
          </div>
        </div>
      );
    }

  }


  class Jogo extends React.Component{
    constructor(props) {
      super(props)
    }

  }
  return (
    <div className="App">

      <h1> olá </h1>
      
    </div>
  );
}

export default App;
