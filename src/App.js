import logo from './logo.svg';
import './App.css';
import FrontPage from './Components/FrontPage';
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import DashBoard from './Components/DashBoard';
import CharDetails from './Components/CharDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={FrontPage} />
        <Route path='/dashboard' component={DashBoard} />
        {/* <Route path='/card' component={CharDetails} /> */}
      </Switch>
      {/* <CharDetails /> */}
  
    </div>
  );
}

export default App;
