import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import RecordsList from '../RecordsList/RecordsList';
import RecordSuccess from '../Success/RecordSuccess';
import RecordAdd from '../Form/Form';
import RecordEdit from '../RecordEdit/RecordEdit';
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function Main() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/records/new" component={RecordAdd} />
        <ProtectedRoute exact path="/records/:id/edit" component={RecordEdit} />
        <ProtectedRoute exact path="/records" component={RecordsList} />
        <Route path="/success" component={RecordSuccess} />
      </Switch>
    );
  }

export default Main;