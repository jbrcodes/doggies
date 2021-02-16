import React from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
import Error404 from './components/Error404';

import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";

/*
NOTE: There are (at least) three ways for <DogDetails /> to get the Dog obj:
1. Simple but a bit smelly: Pass all dogs: <DogDetails dogs={dogs} />
2. Better: Use <FilterDogDetails /> as found in the Springboard solution
3. Best (IMHO): Have the route find the dog obj and then do <DogDetails dog={dog} />

Options 1 and 3 are shown below. The Nav uses option 1; clicking on a dog
in <DogList /> uses option 3. Both options render the same <DogDetails />
*/

function App(props) {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav names={props.dogs.map(d => d.name)} />

                <Switch>
                    <Route exact path="/">
                      <Redirect to="/dogs" />
                    </Route>

                    <Route exact path="/dogs">
                        <DogList dogs={props.dogs} />
                    </Route>

                    {/* Option 1: pass all dogs */}
                    <Route exact path="/dogs1/:name">
                        <DogDetails dogs={props.dogs} />
                    </Route>

                    {/* Option 3: pass only desired dog */}
                    <Route exact path="/dogs3/:name" render={(routeProps) => {
                        // Get dog name from URL param
                        let { name } = routeProps.match.params;
                        // Find the dog
                        let dog = props.dogs.find(d => d.name === name);
                        // Return dog or 404
                        return dog ? <DogDetails dog={dog} /> : <Error404 />
                    }} />

                    <Error404 />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  };

export default App;