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

function App() {
  return (
    <div>
      <h1>Buscaminas</h1>
      <Tablero />
    </div>
  );
}

function Tablero() {
  return (
    <table id="tablero">
      <tbody>
        {Array.from({ length: ALTO }, (_, i) => (
          <tr key={i}>
            {Array.from({ length: ANCHO }, (_, j) => (
              <td key={j} className="celda"></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
