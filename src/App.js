import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { IndexPage } from "./pages";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <IndexPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
