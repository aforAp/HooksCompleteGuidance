export default function Practices() {
    const clickHandler = () => {
        console.log("Clicked");
    };

    return (
        <div>
            <h2>You're logged in!</h2>
            <p className="my">Welcome to your user profile!!!!</p>
            <button onClick={clickHandler}>
                Click Me!!!!
            </button>
        </div>
    )
}