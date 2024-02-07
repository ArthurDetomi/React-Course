import "./MyForm.css"

import { useState } from "react"

const MyForm = ({ user }) => {
    // 6 - Controlled Input
    {/* 3 - Gerenciamento de dados */ }
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviar o formulário");
        console.log(name, email, bio, role);

        // Validação
        // Envio

        // 7 - Limpar form
        setName("");
        setEmail("");
        setBio("");
        setRole("");
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
                        value={name}
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
                        value={email}
                    />
                </label>
                {/* 8 - Text area */}
                <label>
                    <span>Bio:</span>
                    <textarea
                        onChange={(e) => setBio(e.target.value)}
                        name="bio"
                        placeholder="Descrição do usuário:"
                        value={bio}
                    />
                </label>
                {/** 9 - Select */}
                <label>
                    <span>Função no sistema</span>
                    <select
                        name="role"
                        onChange={(e) => setRole(e.target.value ? e.target.value : 'user')}
                        value={role}
                    >
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default MyForm;