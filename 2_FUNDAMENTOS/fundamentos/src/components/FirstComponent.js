import MyComponent from "./MyComponent"

const FirstComponent = () => {
    // Comentário comum
    {/* Comentário JSX */}
    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="teste" >Meu texto</p>
            <MyComponent/>
        </div>
    );

};

export default FirstComponent;