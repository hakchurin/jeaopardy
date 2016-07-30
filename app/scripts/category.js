import React from 'react';
import ReactDOM from 'react-dom';
import {router, Route, hashHistory} from 'react-router';
import GameBoardQuestion from './data';


const Category = React.createClass({

  render:function(){
    let allQuestions= this.props.category.clues.map((question,i) =>{
      return <GameBoardQuestion showQuestion={this.props.showQuestion} question={question} key={i}/>
    });


    return(
      <div id="title">
        <h3>{this.props.category.title}</h3>
        <ul>
        {allQuestions}

        </ul>
      </div>
    );
  },


})

export default Category;


//
// const GameViewList = React.createClass({
//   getInitialState: function(){
//     return {
//       title: '',
//
//     }
//   },
//
//   componentDidMount: function(){
//     $.ajax({
//       type: 'GET',
//       url: `http://jservice.io/api/category?id=6`
//       success: (data) =>{
//       this.setState({title:data})
//     }
//     })
//   },
//   console.log(this.setState);
//
//   render: function(){
//     let questions= this.state.data.map(function(game,i,arr){
//       return <li key ={i} <p>GameView game= {game.title} </p></li>
//     });
//     return (
//       <div>
//       <ul>
//         {questions}
//       </ul>
//       </div>
//     );
//   }
// });
//
// export default GameViewList;
