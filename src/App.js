import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
//import Homepage from './components/Homepage.js';
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

function App() {
  return (
    <div className="App">
	      <h1>AAPT-NEW ENGLAND SECTION</h1>
		<BrowserRouter>
        <div>
			<Navigation/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/regional-meetings" component={Meetings}/>
             <Route path="/physics-olympics" component={Physics}/>
             <Route path="/janet-guersney-award" component={Award}/>
             <Route path="/become-a-member" component={Member}/>
             <Route path="/books-by-section-members" component={Books}/>
             <Route path="/employment-opportunities" component={Employment}/>
             <Route path="/section-information" component={Info}/>
             <Route path="/photo-gallery" component={Gallery}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
	  </div>
  );
}

export default App;
