import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import RecordsList from '../RecordsList/RecordsList';
import RecordSuccess from '../Success/RecordSuccess';
import RecordAdd from '../Form/Form';


function Main() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/records" component={RecordsList} />
        <Route exact path="/records/new" component={RecordAdd} />
        <Route exact path="/success" component={RecordSuccess} />
      </Switch>
    );
  }

export default Main;