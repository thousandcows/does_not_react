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

function NavTag(props) {
  const list = props.data.map((e) => {
    return <li key={e.id}></li><a href={'/read/'+e.id}>{e.title}</a></li>
  });

  return (
    <nav>
      <ol>
        {list}
      </ol>
    </nav>
  );
}

function ArticleTag(props) {
  console.log(props.title);
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function App() {
  const topics = [
    {
      id: 1, title: 'html', body: 'html is ..'
    },
    {
      id: 2, title: 'css', body : 'css is ...'
    }
  ]
  return (
    <div>
      <HeaderTag></HeaderTag>
      <NavTag data={topics}></NavTag>
      <ArticleTag title="welcome" body="hello, world"></ArticleTag>
    </div>
  );
}

export default App;
