import "./MyForm.css"

import { useState } from "react"

const MyForm = () => {
    {/* 3 - Gerenciamento de dados */ }
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviar o formulário");
        console.log(name, email);
    }

    return (
        <div>
            {/* 5 - Envio de formulario */}
            {/* 1 - Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        onChange={handleName}
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                    />
                </div>
                {/* 2- Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* 4 - Simplificação de manipulação de state */}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        placeholder="Digite o seu e-mail:"
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;