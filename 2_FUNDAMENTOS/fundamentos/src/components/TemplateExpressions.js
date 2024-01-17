const TemplateExpressions = () => {
    
    const name = "Arthur Detomi";
    const data = {
        age: 22,
        job: "Programador",
    };

    return (
        <div>
            <h1>Ola {name}, tudo bem ? </h1>
            <p>Voce {name} é um {data.job} muito foda. E tem {data.age} anos</p>   
        </div>
    );

};

export default TemplateExpressions