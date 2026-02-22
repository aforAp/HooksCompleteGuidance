import {createContext, useState} from "react";

export const ToggleContext = createContext({
    theme: 'light',
    toggleTheme: () => {},
});

export default function ToggleContextProvider({children}) {
    const [theme, setTheme] = useState('light');
    function toggleTheme() {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark': 'light');
    }

    const ctxValues = {
        theme,
        toggleTheme,
    }
    
    return(  
    <ToggleContext.Provider value={ctxValues}>
    {children}
    </ToggleContext.Provider>
    );
}