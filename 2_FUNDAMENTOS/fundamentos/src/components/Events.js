const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        alert("Ativou o evento");
    };

    const renderSomething = (x) => {
        let variavel = <h1>Ola</h1>

        if (x) {
            variavel = <h1>Tudo</h1>
        } else {
            variavel = <h1>Bem</h1>
        }
        
        return variavel;
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou !")}>Clique aqui tambem</button>
            </div>
            <div>
                <button onClick={() => {
                    if (true) {
                        console.log("isso é errado.")
                    }
                }}>Clique aqui por favor</button>
            </div>
            {renderSomething(false)}
        </div>
    );
}

export default Events 