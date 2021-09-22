import LandingPage from "./LandingPage/LandingPage";
import { Switch, Route } from "react-router-dom";
import Search from "./Search/Search";

function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} exact />
      <Route path="/search" component={Search} />
    </Switch>
  );
}

export default App;
