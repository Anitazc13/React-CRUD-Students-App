import './App.css';

import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Student } from './pages/Student';
import { UpdateProfile, UpdateStudent } from './pages/UpdateStudent';
import { CreateProfile } from './pages/CreateStudent';


const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Lato&family=Comic+Neue:wght@400;700&display=swap');
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&display=swap");
  * {
    font-family: 'Source Sans Pro', sans-serif;
    margin: 0;
  }
  
  body {
    background-color: #F6F6F9;
    display: flex;
    justify-content: center;
  }
  main {
    display: flex;
    justify-content: center;
    width:360px;
    height: 640px;
    border: 1px solid black;
  }
`;

function App() {
  return (

    <main>
      <Global
        styles={cssGlobal}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/students/:id/description" component={Student} />
          <Route  path="/students/:id/updatestudent" component={UpdateProfile} />
          <Route  path="/students/new" component={CreateProfile} />
        </Switch>
      </Router>
    </main>

  );
}

export default App;
