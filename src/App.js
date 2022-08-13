import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Project from "./components/Project";
import Blog from "./components/Blog";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Project} path="/project" />
        <Route component={Blog} path="/blog" />
        <Route component={SinglePost} path="/post/:slug" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
