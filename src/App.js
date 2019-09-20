import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './login';
import Git  from './github'



class App extends React.Component {
render(){
    return(
        <Router >
            <div>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Git} />
            </div>
        </Router>
        )
    }
}
export default App;
