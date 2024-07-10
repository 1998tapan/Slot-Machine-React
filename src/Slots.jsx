import "./Slots.css";

export default function Slots({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val1 === val3;
    return (
        <div className="slot-container">
            <h1>Slot Results</h1>
            <h1>{val1} {val2} {val3}</h1>
            <h2 style={{ color: isWinner ? "springgreen" : "red" }}>
                {isWinner ? "You win !!" : "Awww, you lost..."}
            </h2>
            {isWinner && <h3> Congrats 🤑 !!</h3>}
        </div>
    );
}