// Componentes
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"

// Styles and images
import './App.css';
import City from "./assets/city.jpg"

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData/>
      <ListRender/>
    </div>
  );
}

export default App;
