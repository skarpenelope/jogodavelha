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
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div> 

          <div className='tabu-linhas'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div> 

          <div className='tabu-linhas'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }

  }


  class Jogo extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsnext: true,
      };
    }

    handleClick(i) {
      const squares = this.state.squares.slice();
      if (squares[i] || this.calcularGanhador(squares)) return;
      squares[i] = this.state.xIsnext ? "X" : "O";
      this.setState({ squares: squares, xIsnext: !this.state.xIsnext});
    }

    calcularGanhador(squares) {
      const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

      ];

      for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
          return squares[a];
      }
      return null;

      render() ;{ // Método render
        const winner = this.calcularGanhador(this.state.squares);
        let status;
        if (winner) {
          status = 'Vencedor: ' + winner;
        } else {
          status = 'Próximo jogador: ' + (this.state.xIsNext ? 'X' : 'O');
        }
    
        return (
          <div>
            <h1>{status}</h1> {/* Mostra o status do jogo */}
            <Tabuleiro 
              squares={this.state.squares} 
              onClick={(i) => this.handleClick(i)} 
            />
          </div>
        );
      }

  }
  return (
    <div className="App">

      <Jogo/>
      
    </div>
  );
}

export default App

