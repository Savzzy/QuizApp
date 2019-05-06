import React from "react";
import { Form } from "react-bootstrap";
import "./question.scss";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: "",
      questionState: "#FFF"
    };
  }
  getAnswers = answers => {
    if (answers) {
      return answers.map((answer, i) => {
        return (
          <div className="answer" key={i}>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check
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
    this.setState({
      userAnswer: event.target.value
    });
    if (this.state.userAnswer === this.props.q.correct_answer) {
      this.setState({
        questionState: "#59E670"
      });
    } else if (this.state.userAnswer !== this.props.q.correct_answer){
      this.setState({
        questionState: "#F41212"
      });
    
    }
  };

  render() {
    if (this.props.q.incorrect_answers) {
      const question = this.props.q.question;
      let incorrectAnswers = this.props.q.incorrect_answers;
      let answers = [...incorrectAnswers, this.props.q.correct_answer];

      return (
        <div
          className="questionContainer"
          style={{ backgroundColor: this.state.questionState }}
        >
          <div className="question">{question}</div>
          <div className="answerContainer">{this.getAnswers(answers)}</div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}
