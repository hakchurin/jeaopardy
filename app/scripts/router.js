import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import GameView from './gameView';
//import GameList from './GameList';
import GameBoard from './data';
import GameBoardQuestion2 from './secondGameQuestion';
import GameView2 from './GameQuestion2';
import Color from './color';


const router = (
  <Router history = {hashHistory}>
    <Route path="/" component={GameView}/>
    <Route path="/gameView" component={GameView}/>
    <Route path ="/gameVew" component={Color}/>
        </Router>
)
//<Route path = "/GameList/:value" component = {GameList}/>

export default router;


// <Route path= "/gameView2" component={GameView2}/>
// <Route path="/GameBoardQuestion" component={GameBoardQuestionModal}/>

// <route path="/gameView" component={GameQuestion2}/>
// <Route path="/gameView" component ={GameView2}/>
