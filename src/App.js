import './App.css';

import { css, Global } from "@emotion/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Student } from './pages/Student';


const cssGlobal = css`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&family=Lato&family=Comic+Neue:wght@400;700&display=swap');
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
    width: 100%;
    height: 100%;
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
        </Switch>
      </Router>
    </main>

  );
}

export default App;
