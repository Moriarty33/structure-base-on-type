import logo from "../../assets/logo.svg";
import "../../styles/App.css";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {!isAuth &&<form>
            <input data-testid="email" type="email" placeholder="email" />
            <input data-testid="password" type="password" placeholder="password" />
            <button data-testid="submit" type="button" onClick={() => setIsAuth(true)}>Submit</button>
        </form>
        }
      </header>
    </div>
  );
}

export default App;
