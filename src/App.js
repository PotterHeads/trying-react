import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favourites from "./pages/Favourities";
import Navigation from "./components/layout/Navigation";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      {/* switch ensures that only 1 page is shown at any point in time */}
      <Switch>
        {/* route helps to display the appropriate js file when the url is pointing at it */}
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
