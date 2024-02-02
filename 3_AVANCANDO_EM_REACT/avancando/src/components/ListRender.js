import { useState } from "react";

const ListRender = () => {
    const [list] = useState(["João", "Claudio", "Alberto", "Irineu"]);
    const [users] = useState([
        {id:1, name: "Arthur"},
        {id:2, name: "Ines"},
        {id:3, name: "Geraldo"}
    ]);

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
        </div>
    );
}

export default ListRender