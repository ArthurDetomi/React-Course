import MyComponent from "./components/MyComponent"

import './App.css';

import {useState} from "react"

function App() {
  const N = 15;
  const [name, setName] = useState("Arthur");

  return (
    <div className="App">
      {/* Css global */}
      <h1>React com css</h1>
      {/* Css de componente */}
      <MyComponent />
      <p>Esse é o paragrafo do App.js</p>
      {/* Inline CSS */}
      <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color: "magenta", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* CSS inline dinamico */}
      <h2 style={(N < 10) ? ({ color: "purple" }) : ({ color: "pink" })}>
        Css dinâmico
      </h2>

      <h2 style={(name === "Arthur") ? ({ color: "green", backgroundColor: "#000" }) : null}>
        Teste nome
      </h2>
    </div>
  );
}

export default App;
