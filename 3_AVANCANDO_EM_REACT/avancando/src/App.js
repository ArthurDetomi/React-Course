// Componentes
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName"
import CarDetails from "./components/CarDetails"
import { useState } from "react"

// Styles and images
import './App.css';
import City from "./assets/city.jpg"

function App() {
  const name = "Joaquin"

  const [userName] = useState("Maria");

  const cars = [
    {id:1, brand: "Ferrari", color:"Amarela", newCar: true, km: 0},
    {id:2, brand: "Kia", color:"Branco", newCar: false, km: 0},
    {id:3, brand: "Renault", color:"Azul", newCar: true, km: 0}
  ];

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
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring properties */}
      <CarDetails  brand="VW" km={100000} color="Azul" newCar={true} />
      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={false}/>
      <CarDetails brand="Fiat" color="Prata" km={4500} newCar={false}/>
      {/* Loop em array de objetos */}
      {
        cars.map((car) => (
          <CarDetails  brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
        ))
      }
    </div>
  );
}

export default App;
