import './App.css';

import { useState, useEffect } from 'react'

const URL = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  // 1- resgatando dados com uma chamada sincrona
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {
          products.map(
            (product) => (
              <li key={product.id}>{product.name} - R$ {product.price}</li>
            )
          )
        }
      </ul>
    </div>
  );
}

export default App;
