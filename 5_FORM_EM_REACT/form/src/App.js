// Componentes
import MyForm from './components/MyForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Iguinho", email: "igor@gmail.com", bio: "Sou comediante", role: "admin"}}/>
    </div>
  );
}

export default App;
