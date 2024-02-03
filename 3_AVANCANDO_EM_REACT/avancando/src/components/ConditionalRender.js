import { useState } from "react";

const ConditionalRender = () => {
    const [x, setX] = useState(true)

    const alternaValorX = () => {
        setX(!x)
    }

    return (
        <div>
            <h1>Isso será exibido ?</h1>
            {
                ((x === true) ? <p>X é true</p> : <p>X é false</p>)
            }
            <button onClick={alternaValorX}>Alternar valor de x</button>
        </div>
    );


}

export default ConditionalRender 