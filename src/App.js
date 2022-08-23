import Dictionary from "./Dictionary";
import "./App.css";
import dictionary from "./dictionary.png";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dictionary} className="app-picture" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="App-footer">
          This project was coded by Olya Po and is{" "}
          <a
            href="https://github.com/OlhaPo/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://playful-truffle-fafe7a.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
