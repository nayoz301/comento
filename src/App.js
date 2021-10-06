import { Switch, Route } from "react-router-dom";
import Nav from "./Nav.js";
import Main from "./Main.js";

function App() {
  return (
    <>
      <Main></Main>
      {/* <Nav />
      <Switch>
        <Route path="/">
          <div>안녕</div>
        </Route>
        <Route path="/comments"></Route>
      </Switch> */}
    </>
  );
}

export default App;
