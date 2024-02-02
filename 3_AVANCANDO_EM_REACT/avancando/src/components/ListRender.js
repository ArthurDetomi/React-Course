import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["João", "Claudio", "Alberto", "Irineu"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Arthur" },
        { id: 2, name: "Ines" },
        { id: 3, name: "Geraldo" }
    ]);

    const deleteRandom = () => {
        const randomNumber = (Math.floor(Math.random() * 4));

        setUsers((prevUsers) => {
            return prevUsers.filter(
                (user) => randomNumber !== user.id
            );
        });
    };

    return (
        <div>
            <ul>
                {
                    // Transformando cada objeto em um outro objeto jsx
                    list.map((item, i) => (
                        <li key={i}>
                            {item}
                        </li>
                    ))
                }
            </ul>
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>
                            Nome usuário: {user.name}
                        </li>
                    ))
                }
            </ul>

            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
}

export default ListRender