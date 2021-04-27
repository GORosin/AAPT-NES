import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home';
import Meetings from './components/Meetings';
import Physics from './components/Physics';
import Award from './components/Award';
import Member from './components/Member';
import Books from './components/Books';
import Employment from './components/Employment';
import Info from './components/Info';
import Gallery from './components/Gallery';
import Error from './components/Error';
import Navigation from './components/Navigation';
import WildApricot from './components/WildApricot';

function App() {
  return (
    <div className="App">
        <div>
			<Navigation className = "navigation"/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/regional-meetings" component={Meetings}/>
             <Route path="/physics-olympics" component={Physics}/>
             <Route path="/janet-guersney-award" component={Award}/>
             <Route path="/become-a-member" component={Member}/>
             <Route path="/books-by-section-members" component={Books}/>
             <Route path="/employment-opportunities" component={Employment}/>
             <Route path="/section-information/" component={Info}/>
             <Route path="/photo-gallery" component={Gallery}/>
             <Route path="/wild-apricot" component={WildApricot}/>
            <Route component={Error}/>
           </Switch>
        </div> 
	  </div>
  );
}

export default App;
