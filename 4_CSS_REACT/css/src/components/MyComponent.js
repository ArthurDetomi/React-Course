import "./MyComponent.css"

const MyComponent = () => {
    return (
        <div>
            {/* Css global */}
            <h1>CSS de componente</h1>
            <p >Este é o paragrafo do componente</p>
            <p className="my-comp-paragraph" >Este também é do componente</p>
        </div>
    );
}

export default MyComponent