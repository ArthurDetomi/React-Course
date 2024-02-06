import styles from "./CarDetails.module.css"

const CarDetails = ({ name, model, year, imgUrl }) => {
    const styleClass = `${styles[name.toLowerCase()]}`;

    return (
        <div className={styleClass}>
            <h2>Carro Detalhe:</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Model: {model}</li>
                <li>Ano: {year}</li>
                <li>
                    <img src={imgUrl} alt={`Car ${name}`} />
                </li>
            </ul>
        </div>
    );
}

export default CarDetails;