// import React from 'react'
// import Game from './Game'


// state = {
//     gameStatus: 'new',
//     remainingSeconds: this.props.initialSeconds,
//     selectedIds: [],
//   };

//   componentDidMount() {
//     if (this.props.autoPlay) {
//       this.startGame();
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   startGame = () => {
//     this.setState({ gameStatus: 'playing' }, () => {
//       this.intervalId = setInterval(() => {
//         this.setState((prevState) => {
//           const newRemainingSeconds = prevState.remainingSeconds - 1;
//           if (newRemainingSeconds === 0) {
//             clearInterval(this.intervalId);
//             return { gameStatus: 'lost', remainingSeconds: 0 };
//           }
//           return { remainingSeconds: newRemainingSeconds };
//         });
//       }, 1000);
//     });
//   };

//   render() {
//     const { gameStatus, remainingSeconds } = this.state;
//     return (
//       <div className="game">
//         <div
//           className="target"
//           style={{ backgroundColor: Game.bgColors[gameStatus] }}
//         >
//           {gameStatus === 'new' ? '?' : this.target}
//         </div>
//         <div className="challenge-steps">
//     const current = history[this.state.history];
//           {this.currentStepNumbers.map((value, index) => (
//             <Number
//               key={index}
//               id={index}
//               value={gameStatus === 'new' ? '?' : value}
//               clickable={this.currentStepNumber(index)}
//               onClick={this.history}
//             />
//           ))}
//         </div>
//         <div className="footer">
//           {gameStatus === 'new' ? (
//             <button onClick={this.startGame}>Start</button>
//           ) : (
//             <div className="timer-value">{remainingSeconds}</div>
//           )}
//           {['won', 'lost'].includes(gameStatus) && (
//             <button onClick={this.props.onPlayAgain}>Play Again</button>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default Timer;