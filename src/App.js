import './App.css';
import AddHomeForm from './Components/Home/AddHomeForm';
import { Switch, Route } from 'react-router-dom';
import Homes from './Components/Home/Homes';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/addHomeForm" component={AddHomeForm} />
        <Route exact path="/" component={Homes} />
      </Switch>
    </main>
  );
}

export default App;
