import MyComponent from "./components/MyComponent"
import Title from "./components/Title"

import './App.css';

import { useState } from "react"

function App() {
  const N = 15;
  const [name, setName] = useState("Arthur");

  const redTitle = true;

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
      {/* Classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este titulo vai ter classe dinamica
      </h2>
      {/* Css Modules */}
      <Title />
      <h2 className="my_title">Testando</h2>
    </div>
  );
}

export default App;
