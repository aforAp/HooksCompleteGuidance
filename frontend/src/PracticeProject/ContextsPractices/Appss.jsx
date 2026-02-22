import ToggleProvider from "./context.jsx";
import App from "./App.jsx";
const Appss = () => {   
    return (
        <ToggleProvider>
            <App />
        </ToggleProvider>
    )
}

export default Appss;