const UserDetails = ({ name, age, job, gender }) => {

    const getGenderArticle = (gender) => {
        return (gender === 'F') ? 'A' : 'O'
    }

    return (
        <div>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {job}</li>
                <li>
                    {
                        (age >= 18) && <p>{getGenderArticle(gender)} {name} pode tirar carteira de habilitação.</p>
                    }
                </li>
            </ul>

        </div>
    );
}

export default UserDetails 