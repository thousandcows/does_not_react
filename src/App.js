import logo from "./logo.svg";
import "./App.css";

function HeaderTag() {
  return (
    <header>
      <h1>
        <a href="/">Web</a>
      </h1>
    </header>
  );
}

function NavTag() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
      </ol>
    </nav>
  );
}

function ArticleTag() {
  return (
    <article>
      {" "}
      <h2>Welcome</h2>
      Hello, WEB!
    </article>
  );
}

function App() {
  return (
    <div>
      <HeaderTag></HeaderTag>
      <NavTag></NavTag>
      <ArticleTag></ArticleTag>
    </div>
  );
}

export default App;
