let ANCHO = 10;
let ALTO = 10;
let MINAS = 0.1;
let SIDE_CELL = 40;

const elementStyle = document.createElement("style");
elementStyle.textContent = `
    :root {
        --side-cell: ${SIDE_CELL}px;
    }
`;
document.head.appendChild(elementStyle); 


let GAME_BOARD = [];

initGameBoard();
function initGameBoard(){
  for (let i = 0; i < ALTO; i++){
    GAME_BOARD[i] = [];
    for (let j = 0; j < ANCHO; j++){
      GAME_BOARD[i][j] = {
        mine: Math.random() < MINAS,
        revealed: false,
        flagged: false,
        neighborMines: 0,
      };
    }
  }

  for (let i = 0; i < ALTO; i++){
    for (let j = 0; j < ANCHO; j++){
      convolucion(j, i);
    }
  }
  function convolucion(row, col){
    for (let i = -1; i <= 1; i++){
      for (let j = -1; j <= 1; j++){
        if (i === 0 && j === 0) continue;
        const colVecina = col + j;
        const rowVecina = row + i;
        if (colVecina < 0 || colVecina >= ANCHO || rowVecina < 0 || rowVecina >= ALTO){
          continue;
        }

        if (GAME_BOARD[rowVecina][colVecina].mine){
          GAME_BOARD[row][col].neighborMines++;
        }
      }
    }
  }
}

function App() {
  return (
    <div>
      <h1>Buscaminas</h1>
      <button onClick={initGameBoard}>Iniciar Juego</button>
      <table id="tablero">
      <tbody>
        {Array.from({ length: ALTO }, (_, i) => (
          <tr key={i}>
            {Array.from({ length: ANCHO }, (_, j) => (
              <td key={j} className="celda">
                {GAME_BOARD[i][j].mine ? "*" : GAME_BOARD[i][j].neighborMines}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
