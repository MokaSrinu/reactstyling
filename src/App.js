import './App.css';
import React from 'react';
import { Button } from "./components/Button";

export default function App() {
  const [count, setCount] = React.useState(0);
  const [theme, setTheme] = React.useState("dark"); 

  const changeCount = (val) => {
    setCount(count + val);
  };

  return (
    <div className="App">
      <h1>Count : {count}</h1>
      <Button onClick={() => changeCount(1)} theme={theme}>
        INCREMENT
      </Button>
      <Button onClick={() => changeCount(-1)} theme={theme}>
        DECREMENT
      </Button>
      <br />
      <br />
      <br />
      <Button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        theme={theme}
      >
        CHANGE THEME
      </Button>
    </div>
  );
}