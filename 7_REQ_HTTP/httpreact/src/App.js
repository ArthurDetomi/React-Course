import './App.css';

import { useState, useEffect } from 'react'

import { useFetch } from './hooks/useFetch'

const URL = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 4 - customHook
  const { data: items, httpConfig, loading } = useFetch(URL);

  /* 1- resgatando dados com uma chamada assincrona
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, []);
  */

  // 2 - adicionando produto metodo POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    }

    /*
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(product)
    })

    // 3 - carregamento dinâmico
    const addedProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct])
    */

    // refatorando Post
    httpConfig(product, "POST");

    setName("");
    setPrice("");
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading && (
        <ul>
          {items &&
            items.map(
              (product) => (
                <li key={product.id}>{product.name} - R$ {product.price}</li>
              )
            )
          }
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type="submit" value="Criar produto" />
        </form>
      </div>
    </div>
  );
}

export default App;
