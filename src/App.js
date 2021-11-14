import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Dashboard from "./components/Dashboard";
import Details1 from "./components/details1";
import Details2 from "./components/details2";

function App() {
  //window.setInterval(refreshPage(),10000);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/Dashboard/:id" component={Dashboard} />
      <Route path="/details1/:id" component={Details1} />
      <Route path="/details2/:id" component={Details2} />
      </div>
    </Router>
  );
}

export default App;
