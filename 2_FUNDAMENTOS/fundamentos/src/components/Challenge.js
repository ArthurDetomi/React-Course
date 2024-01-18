const Challenge = () => {
    const nums = [10, 40];

    const [a, b] = nums;
    
    const handleSum = (x, y) => x + y;
    
    return (
        <div className="CaixaNumero" >
            <p>A = {a} + {b}</p>
            <button onClick={() => console.log(handleSum(a, b))}>Somar</button>
        </div>
    );
};

export default Challenge;