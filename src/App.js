import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>Astro Lily</header>
        <Weather />
        <footer>
          This project is coded by{" "}
          <a href="https://github.com/cosylily" target="blank">
            Hikari{" "}
          </a>
          and is open-sourced in{" "}
          <a href="https://github.com/cosylily/react-astro-lily" target="blank">
            Git Hub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
