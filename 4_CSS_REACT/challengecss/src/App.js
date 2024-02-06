import CarDetails from './components/CarDetails';
import './App.css';

import FerrariImg from "./assets/ferrari.jpeg"
import UnoImg from "./assets/uno.jpeg"
import CorsaImg from "./assets/corsa.jpeg"

function App() {
  const cars = [
    { id: 1, name: "Ferrari", model: "novo", imgUrl: FerrariImg , year:2019 },
    { id: 2, name: "Uno", model: "novo", imgUrl: UnoImg , year:2020 },
    { id: 3, name: "Corsa", model: "novo", imgUrl: CorsaImg, year:2022 }
  ]

  return (
    <div className="App">
      {
        cars.map((car) => (
          <CarDetails key={car.id} name={car.name} model={car.model} imgUrl={car.imgUrl} year={car.year}/>
        ))
      }
    </div>
  );
}

export default App;
