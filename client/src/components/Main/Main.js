import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import RecordsList from '../RecordsList/RecordsList';
import RecordSuccess from '../Success/RecordSuccess';
import RecordAdd from '../Form/Form';
import RecordEdit from '../RecordEdit/RecordEdit';


function Main() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/records/new" component={RecordAdd} />
        <Route exact path="/records/:id/edit" component={RecordEdit} />
        <Route exact path="/records" component={RecordsList} />
        <Route path="/success" component={RecordSuccess} />
      </Switch>
    );
  }

export default Main;