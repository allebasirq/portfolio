function BinaryToggle({ active, setActive }) {

    return (

        <button
            className="binary-toggle"
            onClick={() => setActive(!active)}
        >
            {active
                ? "⦿ Clear Rain"
                : "⦿ Binary Rain"}
        </button>

    );

}

export default BinaryToggle;