const CarDetails = ({ name, model, year, imgUrl }) => {
    return (
        <div>
            <h2>Carro Detalhe:</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Model: {model}</li>
                <li>Ano: {year}</li>
                <li>
                    <img src={imgUrl} alt='Carro ${name}' />

                </li>
            </ul>
        </div>
    );
}

export default CarDetails;