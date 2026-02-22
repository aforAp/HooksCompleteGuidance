import {useContext} from 'react'
import { ToggleContext } from './context';
const App = () => {
  const {theme, toggleTheme} = useContext(ToggleContext);
  return (
    <div style={{
      height: "200px",
      padding: "20px",
      background: theme === "light" ? "#fff" : "#222",
      color: theme === "light" ? "#000" : "#fff"}}>
      <h1>Current Themesssssssss: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App
