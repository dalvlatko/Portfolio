import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/routes/Home";
import About from "../src/components/About";
import Projects from "../src/routes/Projects";
import Blog from "../src/routes/Blog";
import Archive from "../src/routes/Archive";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Projects} path="/projects" />
        <Route component={Blog} path="/blog" exact />
        <Route component={Blog} path="/post/:slug" />
        <Route component={Archive} path="/blog/archive" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
