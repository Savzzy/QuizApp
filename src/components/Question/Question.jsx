import React from "react";
import { Form } from "react-bootstrap";
import "./question.scss";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: "",
      answerState: 0
    };
    this.answers = this.shuffleOptions(this.answersBfrShuffle);
  }
  getAnswers = answers => {
    if (answers) {
      return answers.map((answer, i) => {
        return (
          <div className="answer" key={i}>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check className="form-check"
                inline
                label={answer}
                type="radio"
                value={answer}
                checked={this.state.userAnswer === answer}
                //checked={(answer)=>{this.props.onAnswerSelected(answer)}}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
        );
      });
    }
  };

  handleChange = event => {
    const userAnswer = event.target.value;
    let answerState;
    if (userAnswer.trim() === this.props.q.correct_answer.trim()) {
      answerState = 2;
      //2 for correct answer
    } else {
      answerState = 1;
    }

    this.setState({
      userAnswer: event.target.value,
      answerState
    });
  };

  getAnswerState=()=>{
    switch(this.state.answerState){
      case 0:{
        return "#FFF";
      }
      case 1 : {
        return "#F41212"
      }
      case 2 : {
        return "#59E670"
      }
      default: {
        return "#FFF"
      }

    }
  }
  shuffleOptions=(array)=>{
    var currentIndex = array.length , temp , rndIndex;
    while(0 !== currentIndex){
      rndIndex = Math.floor(Math.random()* currentIndex);
      currentIndex -= 1;
      temp = array[currentIndex];
      array[currentIndex] = array[rndIndex];
      array[rndIndex] = temp;
    }
    return array;
  }

  render() {
    if (this.props.q.incorrect_answers) {
      const question = this.props.q.question;
      let incorrectAnswers = this.props.q.incorrect_answers;
      let answersBfrShuffle = [...incorrectAnswers, this.props.q.correct_answer];
     
      console.log(this.answers);
      return (
        <div
          className="questionContainer"
          style={{ backgroundColor: this.getAnswerState() }}
        >
          <div className="question">{question}</div>
          <div className="answerContainer">{this.getAnswers(this.answers)}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
