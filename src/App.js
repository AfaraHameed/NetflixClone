import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import { originals,action,comedy,romance ,horror} from "./urls";
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix originals"/>
      <RowPost url={action} title="Action Movies" isSmall/>
      <RowPost url={comedy} title="Comedy Movies" isSmall/>
      <RowPost url={romance} title="Romance Movies" isSmall/>
      <RowPost url={horror} title="Horror Movies" isSmall/>
    </div>
  );
}

export default App;
