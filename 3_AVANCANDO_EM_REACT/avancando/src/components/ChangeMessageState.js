const ChangeMessageState = ({handleMessage}) => {
    const messages = [
        "Oi", "Ola", "Tudo", "Bem"
    ]

    const generateRandomIntegerNumber = (min, max) => {
        return parseInt(Math.random() * (max - min) + min);
    }

    const setHandleMensage = () => {
        const index = generateRandomIntegerNumber(0, messages.length + 1)
        handleMessage(messages[index])
    }

    return (
        <div>
            <button onClick={() => setHandleMensage()}>Mudar mensagem</button>
        </div>
    )
}

export default ChangeMessageState