import {Client} from 'boardgame.io/react';
import {Game} from 'boardgame.io/core';
import React from 'react';


function IsVictory(cells){
  ... 
}

function isDraw(cells){
  return cells.filter(c => c === null).length == 0;
}


const TicTacToe = Game({
  setup: () => ({cells: Array(9).fill(null) }),

  moves: {
    clickCell(G, ctx, id) {
      const cells = [...G.cells];
      if(cells[id] === null){
        cells[id] = ctx.currentPlayer;
      }      
      return {...G.cells}
    },
  },
  flow: {
    endGameIf:(G, ctx) => {
      if(IsVictory(G.cells)) {
        return {winner: ctx.currentPlayer };
      }
      if(isDraw(G.cells)) {
        return {draw: true };
      }
    }
  }
});

class TicTacToeBoard extends React.Component {
  onClick(id){
    if(this.isActive(id)){
      this.props.moves.clickCell(id);
      this.props.events.endTurn();
    }
  }

  isActive(id){
    if(!this.props.isActive) return false;
    if(this.props.G.cells[id] !==null) return false;
    return true;
  }

  render() {
    let winner = '';
    if(this.props.ctx.gameover){
      winner =
    }
  }

}


const App = Client({game: TicTacToe });

export default App;