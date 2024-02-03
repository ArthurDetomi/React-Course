// Componentes
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName"
import CarDetails from "./components/CarDetails"
import Fragment from "./components/Fragment"
import Container from "./components/Container"
import ExecuteFunction from "./components/ExecuteFunction"
import Message from "./components/Message"
import ChangeMessageState from "./components/ChangeMessageState"
import UserDetails from "./components/UserDetails"

import { useState } from "react"

// Styles and images
import './App.css';
import City from "./assets/city.jpg"

function App() {
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Kia", color: "Branco", newCar: false, km: 0 },
    { id: 3, brand: "Renault", color: "Azul", newCar: true, km: 0 }
  ];

  const users = [
    { id: 1, name: "Arthur", age: 22, gender: 'M', job: "Programador" },
    { id: 2, name: "Ines", age: 23, gender: 'F', job: "Dentista" },
    { id: 3, name: "Joãozinho Kid", age: 12, gender: 'M', job: "Estudante" }
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

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

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring properties */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={true} />
      {/* Reaproveitando */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={false} />
      <CarDetails brand="Fiat" color="Prata" km={4500} newCar={false} />
      {/* Loop em array de objetos */}
      {
        cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
        ))
      }
      {/* Fragment */}
      <Fragment propFragment="Teste" />
      {/* Children */}
      <Container myValue="Teste">
        <p>Este é o conteudo</p>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* Desafio */}
      {
        users.map((user) =>
          <UserDetails key={user.id}
            name={user.name}
            age={user.age}
            gender={user.gender}
            job={user.job}
          />
        )
      }
    </div>
  );
}

export default App;
