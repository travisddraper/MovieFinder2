import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//gave BrowserRouter an alias as Router
import './App.css';

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  return <h2>About</h2>;
}

const Contact = () => {
  return <h2>Contact</h2>
}

const NotFound = () => {
  return <h2>404 Not Found</h2>
}
/*import * as math from './math.js' // combine all exports into a math object
console.log(math.numbers.reduce(math.sum));
// ! we can name the combined object however we like, it doesn't have to be math.

import { sum, numbers } from './math.js' // import separately 
console.log(numbers.reduce(sum));
//We should only import components that we NEED from a module, so importing separately is more commonly used.
//If there is a clash between object and variable names, we can create an alias during import

import { sum, numbers as numbers2 } from './math.js' // create alias for numbers
const numbers = [1,2,3]; // clashing variable name avoided
console.log(numbers2.reduce(sum)); 

import product, {numbers} from './math.js'

console.log(numbers.reduce(product));*/



const App = () => {
  return (
    <Router>
      <div className="container">
        <h2> React Router Demo</h2>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <hr />
        <p>Using Switch</p>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/contact/" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
