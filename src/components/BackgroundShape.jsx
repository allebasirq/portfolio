function BackgroundShape({ color, className }) {

    return (

        <div
            className={`background-shape ${className}`}
            style={{ backgroundColor: color }}
        ></div>

    );

}

export default BackgroundShape;